variable "location" {
    description = "Azure region"
    type = string
    default = "westus2"
}

variable "resource_group_name" {
    description = "Application resource group"
    type = string
    default = "rg-tkdev"
}

variable "storage_account_name" {
    description = "Storage account for static website"
    type = string
    default = "mamakimstatic"
}

variable "frontdoor_profile_name" {
    description = "Azure front door profile name"
    type = string
    default = "mamakim-frontdoor"
}

variable "frontdoor_endpoint_name" {
    description = "Azure front door endpoint name"
    type = string
    default = "mamakim"
}

variable "tags" {
    description = "Azure resource tags"
    type = map(string)
    
    default = {
        project ="mama-kim"
        environment = "production"
        managed_by = "terraform"
    }
}