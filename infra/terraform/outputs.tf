output "resource_group_name" {
    description "Application resource group"
    value = azurerm_resource_group.main.name
}

output "storage_account_name" {
    description "Static website storage account"
    value = azurerm_storage_account.static.name
}

output "storage_web_endpoint" {
    description = "Azure Storage static website endpoint"
    value = azurerm_storage_account.static.primary_web_host
}

output "storage_web_endpoint_https" {
    description "Https static web endpoint"
    value = "https://${azurerm_storage_account.static.primary_web_host}"
}

output "frontdoor_profile_name" {
    description = "Azure Front Door profile"
    value = azurerm_cdn_frontdoor_profile.main.name
}

output "frontdoor_endpoint_hostname" {
    description = "Azure Front Door hostname"
    value = azurerm_cdn_frontdoor_endpoint.main.host_name
}

output "frontdoor_url" {
    description = "Azure Front Door URL"
    value = "https://${azurerm_cdn_frontdoor_endpoint.main.host_name}"
}