# Resource Group

resource "azurerm_resource_group" "main" {
    name = var.resource_group_name
    location = var.location

    tags = var.tags
}

# Storage Account

resource "azurerm_storage_account" "static" {
    name = var.storage_account_name
    resource_group_name = azurerm_resource_group.main.name
    location = azurerm_resource_group.main.location

    account_kind = "StorageV2"
    account_tier = "Standard"
    account_replication_type = "LRS"
    
    min_tls_version = "TLS1_2"
    https_traffic_only_enabled = true

    # Disable anonymous access to individual blobs.
    # The static website endpoint itself remains publicly
    # accessible through Azure's static website feature.
    allow_nested_items_to_be_public = false

    static_website {
        index_document = "index.html"
        error_404_document = "index.html"
    }

    tags = var.tags
}

# Azure Front Door Standard

resource "azurerm_cdn_frontdoor_profile" "main" {
    name = var.frontdoor_profile_name
    resource_group_name = azurerm_resource_group.main.name

    sku_name = "Standard_AzureFrontDoor"

    tags = var.tags
} 

# Front Door Endpoint

resource "azurerm_cdn_frontdoor_endpoint" "main" {
    name = var.frontdoor_endpoint_name
    cdn_frontdoor_profile_id = azurerm_cdn_frontdoor_profile.main.id

    enabled = true
    
    tags = var.tags
}

# Front Door Origin Group

resource "azurerm_cdn_frontdoor_origin_group" "static" {
    name = "static-origin-group"
    cdn_frontdoor_profile_id = azurerm_cdn_frontdoor_profile.main.id

    session_affinity_enabled = false

    load_balancing {
        additional_latency_in_milliseconds = 50
        sample_size = 4
        successful_samples_required = 3
    }

    health_probe {
        interval_in_seconds = 120
        path = "/"
        protocol = "Https"
        request_type = "HEAD"
    }
}

# Storage Static Website Origin

resource  "azurerm_cdn_frontdoor_origin" "storage" {
    name = "storage-origin"
    cdn_frontdoor_origin_group_id = azurerm_cdn_frontdoor_origin_group.static.id
    enabled = true
    certificate_name_check_enabled = true
    host_name = azurerm_storage_account.static.primary_web_host

    http_port = 80
    https_port = 443

    priority = 1
    weight = 1000
}

# Front Door Route

resource "azurerm_cdn_frontdoor_route" "main" {
    name = "mamakim-route"

    cdn_frontdoor_endpoint_id = azurerm_cdn_frontdoor_endpoint.main.id
    cdn_frontdoor_origin_group_id = azurerm_cdn_frontdoor_origin_group.static.id
    cdn_frontdoor_origin_ids = [
        azurerm_cdn_frontdoor_origin.storage.id
    ]
    enabled = true
    forwarding_protocol = "HttpsOnly"
    https_redirect_enabled = true

    patterns_to_watch = ["/*"]

    supported_protocols = [
        "Http",
        "Https"
    ]
    link_to_default_domain = true

    cache {
        query_string_caching_behavior = "IgnoreQueryString"
        compression_enabled = true
        content_types_to_compress = [
        "text/html",
        "text/css",
        "text/javascript",
        "application/javascript",
        "application/json",
        "image/svg+xml",
        "image/png",
        "image/jpeg",
        "image/webp",
        "font/woff",
        "font/woff2"
        ]
    }
}