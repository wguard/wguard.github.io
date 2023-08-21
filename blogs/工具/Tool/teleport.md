## teleport 配置Windows设备

## Setup 1

```
$ErrorActionPreference = "Stop"

$DOMAIN = Read-Host "Enter your domain name"
$NET_BIOS_DOMAIN = ($DOMAIN -split '\.')[0].ToUpperInvariant()

echo 'Installing the AD services and administration tools...'
Install-WindowsFeature AD-Domain-Services,RSAT-AD-AdminCenter,RSAT-ADDS-Tools

echo 'Installing AD DS (be patient, this may take a while to install)...'
Import-Module ADDSDeployment
Install-ADDSForest `
    -InstallDns `
    -CreateDnsDelegation:$false `
    -ForestMode 'Win2012R2' `
    -DomainMode 'Win2012R2' `
    -DomainName $DOMAIN `
    -DomainNetbiosName $NET_BIOS_DOMAIN `
    -SafeModeAdministratorPassword (Read-Host "Enter your password" -AsSecureString) `
    -NoRebootOnCompletion `
    -Force

Restart-Computer -Force
```

### Setup 2

```
$ErrorActionPreference = "Stop"

Add-WindowsFeature Adcs-Cert-Authority -IncludeManagementTools
Install-AdcsCertificationAuthority -CAType EnterpriseRootCA -HashAlgorithmName SHA384 -Force
Restart-Computer -Force
```

### Setup3

```
$ErrorActionPreference = "Stop"

$TELEPORT_CA_CERT_PEM = "-----BEGIN CERTIFICATE-----
MIIDsTCCApmgAwIBAgIRANcltrgI+zmQU9n1qiJyjcIwDQYJKoZIhvcNAQELBQAw
cjEeMBwGA1UEChMVbG9jYWxob3N0LmxvY2FsZG9tYWluMR4wHAYDVQQDExVsb2Nh
bGhvc3QubG9jYWxkb21haW4xMDAuBgNVBAUTJzI4NTk3OTg0MDA1NjgzMjA2MDgy
MTc4NjI1NTA3OTA0MzY2NTM0NjAeFw0yMzA2MTkwOTU5NDNaFw0zMzA2MTYwOTU5
NDNaMHIxHjAcBgNVBAoTFWxvY2FsaG9zdC5sb2NhbGRvbWFpbjEeMBwGA1UEAxMV
bG9jYWxob3N0LmxvY2FsZG9tYWluMTAwLgYDVQQFEycyODU5Nzk4NDAwNTY4MzIw
NjA4MjE3ODYyNTUwNzkwNDM2NjUzNDYwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
ggEKAoIBAQDCW5U7tULeEo/vu7JzyXTxFWpKXWo2VQZSx+bAsoEOJtz8TWSsD5q2
5MQxUrvgHKToktppTVuQlAS0oYcwr9eBk7cWoENY2/L5rxZ0jdelukJyO6D0xTgU
2FLayvuZEUC5T94VwPsf6++F3BalG8QAZSnTDUnsKqqcozJ+fr6Rk4JNwi3dZr8S
jzNb9uctBpQCtbWsjZ02mrZyaJ0CLS1Slg1KGOG3CKkZDz7RlREcovHdRC6AceUO
YMmCLFzhJCy+BzP3ROg8j23H7+SOLmLyiycfcjaIg5GlB2lS7WE6H0Eg1XzXnEaf
h9fa+7PbzQvRPW8udqVAjFjOZcUnoS5TAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIB
pjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBT7gM+IbJmWvlAYDm6AI8Cxn1oo
KzANBgkqhkiG9w0BAQsFAAOCAQEAQngU3v8Ylk4iplk4MM++ZcF98RRIKvUhnMLj
59SJZJXaEQW1HLPgEcI9iKWuXA4Caw3fJBmQfH1XVHU9vej4DMZGDLG0+8r8pmkD
9JMWQEpeNaoIop1stXS9U0ocflf7ZNqsiBdgkR+mlh/aEFMYPvASd3wNoWJLDg4/
bM8YxQfJ2O1HbTR5mnU3wYtje8yuISSGpdhq7CRHgYvJqRlmUNJypKfdEB967g2P
u0e0vQjRdPjQmMSGLZoJ4ZIGmDEGBDbh38Y1JMjzpAmXkReeBic4/mzjXm7DK7Vo
3HIzxX6sz9uUpzOoeq04V0qjkgxnkzer87ikqi/4sIIteUgNIw==
-----END CERTIFICATE-----
"
$TELEPORT_CA_CERT_SHA1 = "D59C08AAFE6DBA772CB2D88C0848B0CCA750616C"
$TELEPORT_CA_CERT_BLOB_BASE64 = "IAAAAAEAAAC1AwAAMIIDsTCCApmgAwIBAgIRANcltrgI+zmQU9n1qiJyjcIwDQYJKoZIhvcNAQELBQAwcjEeMBwGA1UEChMVbG9jYWxob3N0LmxvY2FsZG9tYWluMR4wHAYDVQQDExVsb2NhbGhvc3QubG9jYWxkb21haW4xMDAuBgNVBAUTJzI4NTk3OTg0MDA1NjgzMjA2MDgyMTc4NjI1NTA3OTA0MzY2NTM0NjAeFw0yMzA2MTkwOTU5NDNaFw0zMzA2MTYwOTU5NDNaMHIxHjAcBgNVBAoTFWxvY2FsaG9zdC5sb2NhbGRvbWFpbjEeMBwGA1UEAxMVbG9jYWxob3N0LmxvY2FsZG9tYWluMTAwLgYDVQQFEycyODU5Nzk4NDAwNTY4MzIwNjA4MjE3ODYyNTUwNzkwNDM2NjUzNDYwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDCW5U7tULeEo/vu7JzyXTxFWpKXWo2VQZSx+bAsoEOJtz8TWSsD5q25MQxUrvgHKToktppTVuQlAS0oYcwr9eBk7cWoENY2/L5rxZ0jdelukJyO6D0xTgU2FLayvuZEUC5T94VwPsf6++F3BalG8QAZSnTDUnsKqqcozJ+fr6Rk4JNwi3dZr8SjzNb9uctBpQCtbWsjZ02mrZyaJ0CLS1Slg1KGOG3CKkZDz7RlREcovHdRC6AceUOYMmCLFzhJCy+BzP3ROg8j23H7+SOLmLyiycfcjaIg5GlB2lS7WE6H0Eg1XzXnEafh9fa+7PbzQvRPW8udqVAjFjOZcUnoS5TAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBpjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBT7gM+IbJmWvlAYDm6AI8Cxn1ooKzANBgkqhkiG9w0BAQsFAAOCAQEAQngU3v8Ylk4iplk4MM++ZcF98RRIKvUhnMLj59SJZJXaEQW1HLPgEcI9iKWuXA4Caw3fJBmQfH1XVHU9vej4DMZGDLG0+8r8pmkD9JMWQEpeNaoIop1stXS9U0ocflf7ZNqsiBdgkR+mlh/aEFMYPvASd3wNoWJLDg4/bM8YxQfJ2O1HbTR5mnU3wYtje8yuISSGpdhq7CRHgYvJqRlmUNJypKfdEB967g2Pu0e0vQjRdPjQmMSGLZoJ4ZIGmDEGBDbh38Y1JMjzpAmXkReeBic4/mzjXm7DK7Vo3HIzxX6sz9uUpzOoeq04V0qjkgxnkzer87ikqi/4sIIteUgNIw=="
$TELEPORT_PROXY_PUBLIC_ADDR = ""
$TELEPORT_PROVISION_TOKEN = "49dacbd7c02e5569f0b1c4e7f4fcc5d3"
$TELEPORT_INTERNAL_RESOURCE_ID = "0a9e56ba-913d-4afd-b534-4b6a7bb6371b"

$AD_USER_NAME="Teleport Service Account"
$SAM_ACCOUNT_NAME="svc-teleport"

$DOMAIN_NAME=(Get-ADDomain).DNSRoot
$DOMAIN_DN=$((Get-ADDomain).DistinguishedName)

try {
  Get-ADUser -Identity $SAM_ACCOUNT_NAME
}
catch [Microsoft.ActiveDirectory.Management.ADIdentityNotFoundException]
{
  Add-Type -AssemblyName 'System.Web'
  do {
    $PASSWORD=[System.Web.Security.Membership]::GeneratePassword(15,1)
  } until ($PASSWORD -match '\d')
  $SECURE_STRING_PASSWORD=ConvertTo-SecureString $PASSWORD -AsPlainText -Force
  New-ADUser -Name $AD_USER_NAME -SamAccountName $SAM_ACCOUNT_NAME -AccountPassword $SECURE_STRING_PASSWORD -Enabled $true
}

# Create the CDP/Teleport container.
try {
  Get-ADObject -Identity "CN=Teleport,CN=CDP,CN=Public Key Services,CN=Services,CN=Configuration,$DOMAIN_DN"
}
catch [Microsoft.ActiveDirectory.Management.ADIdentityNotFoundException]
{
  New-ADObject -Name "Teleport" -Type "container" -Path "CN=CDP,CN=Public Key Services,CN=Services,CN=Configuration,$DOMAIN_DN"
}

# Gives Teleport the ability to create LDAP containers in the CDP container.
dsacls "CN=CDP,CN=Public Key Services,CN=Services,CN=Configuration,$DOMAIN_DN" /I:T /G "$($SAM_ACCOUNT_NAME):CC;container;"
# Gives Teleport the ability to create and delete cRLDistributionPoint objects in the CDP/Teleport container.
dsacls "CN=Teleport,CN=CDP,CN=Public Key Services,CN=Services,CN=Configuration,$DOMAIN_DN" /I:T /G "$($SAM_ACCOUNT_NAME):CCDC;cRLDistributionPoint;"
# Gives Teleport the ability to write the certificateRevocationList property in the CDP/Teleport container.
dsacls "CN=Teleport,CN=CDP,CN=Public Key Services,CN=Services,CN=Configuration,$DOMAIN_DN " /I:T /G "$($SAM_ACCOUNT_NAME):WP;certificateRevocationList;"
# Gives Teleport the ability to create and delete certificationAuthority objects in the NTAuthCertificates container.
dsacls "CN=NTAuthCertificates,CN=Public Key Services,CN=Services,CN=Configuration,$DOMAIN_DN" /I:T /G "$($SAM_ACCOUNT_NAME):CCDC;certificationAuthority;"
# Gives Teleport the ability to write the cACertificate property in the NTAuthCertificates container.
dsacls "CN=NTAuthCertificates,CN=Public Key Services,CN=Services,CN=Configuration,$DOMAIN_DN" /I:T /G "$($SAM_ACCOUNT_NAME):WP;cACertificate;"

$SAM_ACCOUNT_SID=(Get-ADUser -Identity $SAM_ACCOUNT_NAME).SID.Value


# Step 2/7. Prevent the service account from performing interactive logins
$BLOCK_GPO_NAME="Block teleport-svc Interactive Login"
try {
  $BLOCK_GPO = Get-GPO -Name $BLOCK_GPO_NAME
}
catch [System.ArgumentException]
{
  $BLOCK_GPO = New-GPO -Name $BLOCK_GPO_NAME
  $BLOCK_GPO | New-GPLink -Target $DOMAIN_DN
}

$DENY_SECURITY_TEMPLATE=@'
[Unicode]
Unicode=yes
[Version]
signature="$CHICAGO$"
[Privilege Rights]
SeDenyRemoteInteractiveLogonRight=*{0}
SeDenyInteractiveLogonRight=*{0}
'@ -f $SAM_ACCOUNT_SID


$BLOCK_POLICY_GUID=$BLOCK_GPO.Id.Guid.ToUpper()
$BLOCK_GPO_PATH="$env:SystemRoot\SYSVOL\sysvol\$DOMAIN_NAME\Policies\{$BLOCK_POLICY_GUID}\Machine\Microsoft\Windows NT\SecEdit"
New-Item -Force -Type Directory -Path $BLOCK_GPO_PATH
New-Item -Force -Path $BLOCK_GPO_PATH -Name "GptTmpl.inf" -ItemType "file" -Value $DENY_SECURITY_TEMPLATE


# Step 3/7. Configure a GPO to allow Teleport connections
$ACCESS_GPO_NAME="Teleport Access Policy"
try {
  $ACCESS_GPO = Get-GPO -Name $ACCESS_GPO_NAME
}
catch [System.ArgumentException]
{
  $ACCESS_GPO = New-GPO -Name $ACCESS_GPO_NAME
  $ACCESS_GPO | New-GPLink -Target $DOMAIN_DN
}


$CERT = [System.Convert]::FromBase64String($TELEPORT_CA_CERT_BLOB_BASE64)
Set-GPRegistryValue -Name $ACCESS_GPO_NAME -Key "HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\SystemCertificates\Root\Certificates\$TELEPORT_CA_CERT_SHA1" -ValueName "Blob" -Type Binary -Value $CERT

$TELEPORT_CA_CERT_PEM = "-----BEGIN CERTIFICATE-----
MIIDsTCCApmgAwIBAgIRANcltrgI+zmQU9n1qiJyjcIwDQYJKoZIhvcNAQELBQAw
cjEeMBwGA1UEChMVbG9jYWxob3N0LmxvY2FsZG9tYWluMR4wHAYDVQQDExVsb2Nh
bGhvc3QubG9jYWxkb21haW4xMDAuBgNVBAUTJzI4NTk3OTg0MDA1NjgzMjA2MDgy
MTc4NjI1NTA3OTA0MzY2NTM0NjAeFw0yMzA2MTkwOTU5NDNaFw0zMzA2MTYwOTU5
NDNaMHIxHjAcBgNVBAoTFWxvY2FsaG9zdC5sb2NhbGRvbWFpbjEeMBwGA1UEAxMV
bG9jYWxob3N0LmxvY2FsZG9tYWluMTAwLgYDVQQFEycyODU5Nzk4NDAwNTY4MzIw
NjA4MjE3ODYyNTUwNzkwNDM2NjUzNDYwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
ggEKAoIBAQDCW5U7tULeEo/vu7JzyXTxFWpKXWo2VQZSx+bAsoEOJtz8TWSsD5q2
5MQxUrvgHKToktppTVuQlAS0oYcwr9eBk7cWoENY2/L5rxZ0jdelukJyO6D0xTgU
2FLayvuZEUC5T94VwPsf6++F3BalG8QAZSnTDUnsKqqcozJ+fr6Rk4JNwi3dZr8S
jzNb9uctBpQCtbWsjZ02mrZyaJ0CLS1Slg1KGOG3CKkZDz7RlREcovHdRC6AceUO
YMmCLFzhJCy+BzP3ROg8j23H7+SOLmLyiycfcjaIg5GlB2lS7WE6H0Eg1XzXnEaf
h9fa+7PbzQvRPW8udqVAjFjOZcUnoS5TAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIB
pjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBT7gM+IbJmWvlAYDm6AI8Cxn1oo
KzANBgkqhkiG9w0BAQsFAAOCAQEAQngU3v8Ylk4iplk4MM++ZcF98RRIKvUhnMLj
59SJZJXaEQW1HLPgEcI9iKWuXA4Caw3fJBmQfH1XVHU9vej4DMZGDLG0+8r8pmkD
9JMWQEpeNaoIop1stXS9U0ocflf7ZNqsiBdgkR+mlh/aEFMYPvASd3wNoWJLDg4/
bM8YxQfJ2O1HbTR5mnU3wYtje8yuISSGpdhq7CRHgYvJqRlmUNJypKfdEB967g2P
u0e0vQjRdPjQmMSGLZoJ4ZIGmDEGBDbh38Y1JMjzpAmXkReeBic4/mzjXm7DK7Vo
3HIzxX6sz9uUpzOoeq04V0qjkgxnkzer87ikqi/4sIIteUgNIw==
-----END CERTIFICATE-----
"

$TeleportPEMFile = $env:TEMP + "\teleport.pem"
Write-Output $TELEPORT_CA_CERT_PEM | Out-File -FilePath $TeleportPEMFile

certutil -dspublish -f $TeleportPEMFile RootCA
certutil -dspublish -f $TeleportPEMFile NTAuthCA
certutil -pulse

$ACCESS_SECURITY_TEMPLATE=@'
[Unicode]
Unicode=yes
[Version]
signature="$CHICAGO$"
[Service General Setting]
"SCardSvr",2,""
'@

$COMMENT_XML=@'
<?xml version='1.0' encoding='utf-8'?>
<policyComments xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" revision="1.0" schemaVersion="1.0" xmlns="http://www.microsoft.com/GroupPolicy/CommentDefinitions">
  <policyNamespaces>
    <using prefix="ns0" namespace="Microsoft.Policies.TerminalServer"></using>
  </policyNamespaces>
  <comments>
    <admTemplate></admTemplate>
  </comments>
  <resources minRequiredRevision="1.0">
    <stringTable></stringTable>
  </resources>
</policyComments>
'@


$ACCESS_POLICY_GUID=$ACCESS_GPO.Id.Guid.ToUpper()
$ACCESS_GPO_PATH="$env:SystemRoot\SYSVOL\sysvol\$DOMAIN_NAME\Policies\{$ACCESS_POLICY_GUID}\Machine\Microsoft\Windows NT\SecEdit"

New-Item -Force -Type Directory -Path $ACCESS_GPO_PATH
New-Item -Force -Path $ACCESS_GPO_PATH -Name "GptTmpl.inf" -ItemType "file" -Value $ACCESS_SECURITY_TEMPLATE
New-Item -Force -Path "$env:SystemRoot\SYSVOL\sysvol\$DOMAIN_NAME\Policies\{$ACCESS_POLICY_GUID}\Machine" -Name "comment.cmtx" -ItemType "file" -Value $COMMENT_XML

# Firewall
$FIREWALL_USER_MODE_IN_TCP = "v2.31|Action=Allow|Active=TRUE|Dir=In|Protocol=6|LPort=3389|App=%SystemRoot%\system32\svchost.exe|Svc=termservice|Name=@FirewallAPI.dll,-28775|Desc=@FirewallAPI.dll,-28756|EmbedCtxt=@FirewallAPI.dll,-28752|"
Set-GPRegistryValue -Name $ACCESS_GPO_NAME -Key "HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\WindowsFirewall" -ValueName "PolicyVersion" -Type DWORD -Value 543
Set-GPRegistryValue -Name $ACCESS_GPO_NAME -Type String -Key "HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\WindowsFirewall\FirewallRules" -ValueName "RemoteDesktop-UserMode-In-TCP" -Value $FIREWALL_USER_MODE_IN_TCP


# Allow remote RDP connections
Set-GPRegistryValue -Name $ACCESS_GPO_NAME -Key "HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows NT\Terminal Services" -ValueName "fDenyTSConnections" -Type DWORD -Value 0
Set-GPRegistryValue -Name $ACCESS_GPO_NAME -Key "HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows NT\Terminal Services" -ValueName "UserAuthentication" -Type DWORD -Value 0

# Disable "Always prompt for password upon connection"
Set-GPRegistryValue -Name $ACCESS_GPO_NAME -Key "HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows NT\Terminal Services" -ValueName "fPromptForPassword" -Type DWORD -Value 0

# # Step 5/7. Export your LDAP CA certificate
$WindowsDERFile = $env:TEMP + "\windows.der"
$WindowsPEMFile = $env:TEMP + "\windows.pem"
certutil "-ca.cert" $WindowsDERFile 
certutil -encode $WindowsDERFile $WindowsPEMFile

gpupdate.exe /force

$CA_CERT_PEM = Get-Content -Path $WindowsPEMFile
$CA_CERT_YAML = $CA_CERT_PEM | ForEach-Object { "        " + $_  } | Out-String


$NET_BIOS_NAME = (Get-ADDomain).NetBIOSName
$LDAP_USERNAME = "$NET_BIOS_NAME\$SAM_ACCOUNT_NAME"
$LDAP_USER_SID=(Get-ADUser -Identity $SAM_ACCOUNT_NAME).SID.Value

$COMPUTER_NAME = (Resolve-DnsName -Type A $Env:COMPUTERNAME).Name
$COMPUTER_IP = (Resolve-DnsName -Type A $Env:COMPUTERNAME).Address
$LDAP_ADDR="$COMPUTER_IP" + ":636"

$DESKTOP_ACCESS_CONFIG_YAML=@"
version: v3
teleport:
  auth_token: $TELEPORT_PROVISION_TOKEN
  proxy_server: $TELEPORT_PROXY_PUBLIC_ADDR

auth_service:
  enabled: no
ssh_service:
  enabled: no
proxy_service:
  enabled: no

windows_desktop_service:
  enabled: yes
  ldap:
    addr:     '$LDAP_ADDR'
    domain:   '$DOMAIN_NAME'
    username: '$LDAP_USERNAME'
    sid: '$LDAP_USER_SID'
    server_name: '$COMPUTER_NAME'
    insecure_skip_verify: false
    ldap_ca_cert: |
$CA_CERT_YAML
  discovery:
    base_dn: '*'
  labels:
    teleport.internal/resource-id: $TELEPORT_INTERNAL_RESOURCE_ID
"@

$OUTPUT=@'

Use the following teleport.yaml to start a Windows Desktop Service.
For a detailed configuration reference, see

https://goteleport.com/docs/desktop-access/reference/configuration/


{0}

'@ -f $DESKTOP_ACCESS_CONFIG_YAML

$WHITESPACE_WARNING=@'
# WARNING:
# When copying and pasting the config from below, PowerShell ISE will add whitespace to the start - delete this before you save the config.
'@

if ($host.name -match 'ISE')
{
  Write-Output $WHITESPACE_WARNING
}

Write-Output $OUTPUT

# cleanup files that were created during execution of this script
Remove-Item $TeleportPEMFile -Recurse
Remove-Item $WindowsDERFile -Recurse
Remove-Item $WindowsPEMFile -Recurse
```

