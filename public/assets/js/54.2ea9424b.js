(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{499:function(s,n,e){"use strict";e.r(n);var a=e(1),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"teleport-配置windows设备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#teleport-配置windows设备"}},[s._v("#")]),s._v(" teleport 配置Windows设备")]),s._v(" "),n("h2",{attrs:{id:"setup-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup-1"}},[s._v("#")]),s._v(" Setup 1")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ErrorActionPreference = \"Stop\"\n\n$DOMAIN = Read-Host \"Enter your domain name\"\n$NET_BIOS_DOMAIN = ($DOMAIN -split '\\.')[0].ToUpperInvariant()\n\necho 'Installing the AD services and administration tools...'\nInstall-WindowsFeature AD-Domain-Services,RSAT-AD-AdminCenter,RSAT-ADDS-Tools\n\necho 'Installing AD DS (be patient, this may take a while to install)...'\nImport-Module ADDSDeployment\nInstall-ADDSForest `\n    -InstallDns `\n    -CreateDnsDelegation:$false `\n    -ForestMode 'Win2012R2' `\n    -DomainMode 'Win2012R2' `\n    -DomainName $DOMAIN `\n    -DomainNetbiosName $NET_BIOS_DOMAIN `\n    -SafeModeAdministratorPassword (Read-Host \"Enter your password\" -AsSecureString) `\n    -NoRebootOnCompletion `\n    -Force\n\nRestart-Computer -Force\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("h3",{attrs:{id:"setup-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup-2"}},[s._v("#")]),s._v(" Setup 2")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('$ErrorActionPreference = "Stop"\n\nAdd-WindowsFeature Adcs-Cert-Authority -IncludeManagementTools\nInstall-AdcsCertificationAuthority -CAType EnterpriseRootCA -HashAlgorithmName SHA384 -Force\nRestart-Computer -Force\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"setup3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup3"}},[s._v("#")]),s._v(" Setup3")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('$ErrorActionPreference = "Stop"\n\n$TELEPORT_CA_CERT_PEM = "-----BEGIN CERTIFICATE-----\nMIIDsTCCApmgAwIBAgIRANcltrgI+zmQU9n1qiJyjcIwDQYJKoZIhvcNAQELBQAw\ncjEeMBwGA1UEChMVbG9jYWxob3N0LmxvY2FsZG9tYWluMR4wHAYDVQQDExVsb2Nh\nbGhvc3QubG9jYWxkb21haW4xMDAuBgNVBAUTJzI4NTk3OTg0MDA1NjgzMjA2MDgy\nMTc4NjI1NTA3OTA0MzY2NTM0NjAeFw0yMzA2MTkwOTU5NDNaFw0zMzA2MTYwOTU5\nNDNaMHIxHjAcBgNVBAoTFWxvY2FsaG9zdC5sb2NhbGRvbWFpbjEeMBwGA1UEAxMV\nbG9jYWxob3N0LmxvY2FsZG9tYWluMTAwLgYDVQQFEycyODU5Nzk4NDAwNTY4MzIw\nNjA4MjE3ODYyNTUwNzkwNDM2NjUzNDYwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw\nggEKAoIBAQDCW5U7tULeEo/vu7JzyXTxFWpKXWo2VQZSx+bAsoEOJtz8TWSsD5q2\n5MQxUrvgHKToktppTVuQlAS0oYcwr9eBk7cWoENY2/L5rxZ0jdelukJyO6D0xTgU\n2FLayvuZEUC5T94VwPsf6++F3BalG8QAZSnTDUnsKqqcozJ+fr6Rk4JNwi3dZr8S\njzNb9uctBpQCtbWsjZ02mrZyaJ0CLS1Slg1KGOG3CKkZDz7RlREcovHdRC6AceUO\nYMmCLFzhJCy+BzP3ROg8j23H7+SOLmLyiycfcjaIg5GlB2lS7WE6H0Eg1XzXnEaf\nh9fa+7PbzQvRPW8udqVAjFjOZcUnoS5TAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIB\npjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBT7gM+IbJmWvlAYDm6AI8Cxn1oo\nKzANBgkqhkiG9w0BAQsFAAOCAQEAQngU3v8Ylk4iplk4MM++ZcF98RRIKvUhnMLj\n59SJZJXaEQW1HLPgEcI9iKWuXA4Caw3fJBmQfH1XVHU9vej4DMZGDLG0+8r8pmkD\n9JMWQEpeNaoIop1stXS9U0ocflf7ZNqsiBdgkR+mlh/aEFMYPvASd3wNoWJLDg4/\nbM8YxQfJ2O1HbTR5mnU3wYtje8yuISSGpdhq7CRHgYvJqRlmUNJypKfdEB967g2P\nu0e0vQjRdPjQmMSGLZoJ4ZIGmDEGBDbh38Y1JMjzpAmXkReeBic4/mzjXm7DK7Vo\n3HIzxX6sz9uUpzOoeq04V0qjkgxnkzer87ikqi/4sIIteUgNIw==\n-----END CERTIFICATE-----\n"\n$TELEPORT_CA_CERT_SHA1 = "D59C08AAFE6DBA772CB2D88C0848B0CCA750616C"\n$TELEPORT_CA_CERT_BLOB_BASE64 = "IAAAAAEAAAC1AwAAMIIDsTCCApmgAwIBAgIRANcltrgI+zmQU9n1qiJyjcIwDQYJKoZIhvcNAQELBQAwcjEeMBwGA1UEChMVbG9jYWxob3N0LmxvY2FsZG9tYWluMR4wHAYDVQQDExVsb2NhbGhvc3QubG9jYWxkb21haW4xMDAuBgNVBAUTJzI4NTk3OTg0MDA1NjgzMjA2MDgyMTc4NjI1NTA3OTA0MzY2NTM0NjAeFw0yMzA2MTkwOTU5NDNaFw0zMzA2MTYwOTU5NDNaMHIxHjAcBgNVBAoTFWxvY2FsaG9zdC5sb2NhbGRvbWFpbjEeMBwGA1UEAxMVbG9jYWxob3N0LmxvY2FsZG9tYWluMTAwLgYDVQQFEycyODU5Nzk4NDAwNTY4MzIwNjA4MjE3ODYyNTUwNzkwNDM2NjUzNDYwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDCW5U7tULeEo/vu7JzyXTxFWpKXWo2VQZSx+bAsoEOJtz8TWSsD5q25MQxUrvgHKToktppTVuQlAS0oYcwr9eBk7cWoENY2/L5rxZ0jdelukJyO6D0xTgU2FLayvuZEUC5T94VwPsf6++F3BalG8QAZSnTDUnsKqqcozJ+fr6Rk4JNwi3dZr8SjzNb9uctBpQCtbWsjZ02mrZyaJ0CLS1Slg1KGOG3CKkZDz7RlREcovHdRC6AceUOYMmCLFzhJCy+BzP3ROg8j23H7+SOLmLyiycfcjaIg5GlB2lS7WE6H0Eg1XzXnEafh9fa+7PbzQvRPW8udqVAjFjOZcUnoS5TAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBpjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBT7gM+IbJmWvlAYDm6AI8Cxn1ooKzANBgkqhkiG9w0BAQsFAAOCAQEAQngU3v8Ylk4iplk4MM++ZcF98RRIKvUhnMLj59SJZJXaEQW1HLPgEcI9iKWuXA4Caw3fJBmQfH1XVHU9vej4DMZGDLG0+8r8pmkD9JMWQEpeNaoIop1stXS9U0ocflf7ZNqsiBdgkR+mlh/aEFMYPvASd3wNoWJLDg4/bM8YxQfJ2O1HbTR5mnU3wYtje8yuISSGpdhq7CRHgYvJqRlmUNJypKfdEB967g2Pu0e0vQjRdPjQmMSGLZoJ4ZIGmDEGBDbh38Y1JMjzpAmXkReeBic4/mzjXm7DK7Vo3HIzxX6sz9uUpzOoeq04V0qjkgxnkzer87ikqi/4sIIteUgNIw=="\n$TELEPORT_PROXY_PUBLIC_ADDR = ""\n$TELEPORT_PROVISION_TOKEN = "49dacbd7c02e5569f0b1c4e7f4fcc5d3"\n$TELEPORT_INTERNAL_RESOURCE_ID = "0a9e56ba-913d-4afd-b534-4b6a7bb6371b"\n\n$AD_USER_NAME="Teleport Service Account"\n$SAM_ACCOUNT_NAME="svc-teleport"\n\n$DOMAIN_NAME=(Get-ADDomain).DNSRoot\n$DOMAIN_DN=$((Get-ADDomain).DistinguishedName)\n\ntry {\n  Get-ADUser -Identity $SAM_ACCOUNT_NAME\n}\ncatch [Microsoft.ActiveDirectory.Management.ADIdentityNotFoundException]\n{\n  Add-Type -AssemblyName \'System.Web\'\n  do {\n    $PASSWORD=[System.Web.Security.Membership]::GeneratePassword(15,1)\n  } until ($PASSWORD -match \'\\d\')\n  $SECURE_STRING_PASSWORD=ConvertTo-SecureString $PASSWORD -AsPlainText -Force\n  New-ADUser -Name $AD_USER_NAME -SamAccountName $SAM_ACCOUNT_NAME -AccountPassword $SECURE_STRING_PASSWORD -Enabled $true\n}\n\n# Create the CDP/Teleport container.\ntry {\n  Get-ADObject -Identity "CN=Teleport,CN=CDP,CN=Public Key Services,CN=Services,CN=Configuration,$DOMAIN_DN"\n}\ncatch [Microsoft.ActiveDirectory.Management.ADIdentityNotFoundException]\n{\n  New-ADObject -Name "Teleport" -Type "container" -Path "CN=CDP,CN=Public Key Services,CN=Services,CN=Configuration,$DOMAIN_DN"\n}\n\n# Gives Teleport the ability to create LDAP containers in the CDP container.\ndsacls "CN=CDP,CN=Public Key Services,CN=Services,CN=Configuration,$DOMAIN_DN" /I:T /G "$($SAM_ACCOUNT_NAME):CC;container;"\n# Gives Teleport the ability to create and delete cRLDistributionPoint objects in the CDP/Teleport container.\ndsacls "CN=Teleport,CN=CDP,CN=Public Key Services,CN=Services,CN=Configuration,$DOMAIN_DN" /I:T /G "$($SAM_ACCOUNT_NAME):CCDC;cRLDistributionPoint;"\n# Gives Teleport the ability to write the certificateRevocationList property in the CDP/Teleport container.\ndsacls "CN=Teleport,CN=CDP,CN=Public Key Services,CN=Services,CN=Configuration,$DOMAIN_DN " /I:T /G "$($SAM_ACCOUNT_NAME):WP;certificateRevocationList;"\n# Gives Teleport the ability to create and delete certificationAuthority objects in the NTAuthCertificates container.\ndsacls "CN=NTAuthCertificates,CN=Public Key Services,CN=Services,CN=Configuration,$DOMAIN_DN" /I:T /G "$($SAM_ACCOUNT_NAME):CCDC;certificationAuthority;"\n# Gives Teleport the ability to write the cACertificate property in the NTAuthCertificates container.\ndsacls "CN=NTAuthCertificates,CN=Public Key Services,CN=Services,CN=Configuration,$DOMAIN_DN" /I:T /G "$($SAM_ACCOUNT_NAME):WP;cACertificate;"\n\n$SAM_ACCOUNT_SID=(Get-ADUser -Identity $SAM_ACCOUNT_NAME).SID.Value\n\n\n# Step 2/7. Prevent the service account from performing interactive logins\n$BLOCK_GPO_NAME="Block teleport-svc Interactive Login"\ntry {\n  $BLOCK_GPO = Get-GPO -Name $BLOCK_GPO_NAME\n}\ncatch [System.ArgumentException]\n{\n  $BLOCK_GPO = New-GPO -Name $BLOCK_GPO_NAME\n  $BLOCK_GPO | New-GPLink -Target $DOMAIN_DN\n}\n\n$DENY_SECURITY_TEMPLATE=@\'\n[Unicode]\nUnicode=yes\n[Version]\nsignature="$CHICAGO$"\n[Privilege Rights]\nSeDenyRemoteInteractiveLogonRight=*{0}\nSeDenyInteractiveLogonRight=*{0}\n\'@ -f $SAM_ACCOUNT_SID\n\n\n$BLOCK_POLICY_GUID=$BLOCK_GPO.Id.Guid.ToUpper()\n$BLOCK_GPO_PATH="$env:SystemRoot\\SYSVOL\\sysvol\\$DOMAIN_NAME\\Policies\\{$BLOCK_POLICY_GUID}\\Machine\\Microsoft\\Windows NT\\SecEdit"\nNew-Item -Force -Type Directory -Path $BLOCK_GPO_PATH\nNew-Item -Force -Path $BLOCK_GPO_PATH -Name "GptTmpl.inf" -ItemType "file" -Value $DENY_SECURITY_TEMPLATE\n\n\n# Step 3/7. Configure a GPO to allow Teleport connections\n$ACCESS_GPO_NAME="Teleport Access Policy"\ntry {\n  $ACCESS_GPO = Get-GPO -Name $ACCESS_GPO_NAME\n}\ncatch [System.ArgumentException]\n{\n  $ACCESS_GPO = New-GPO -Name $ACCESS_GPO_NAME\n  $ACCESS_GPO | New-GPLink -Target $DOMAIN_DN\n}\n\n\n$CERT = [System.Convert]::FromBase64String($TELEPORT_CA_CERT_BLOB_BASE64)\nSet-GPRegistryValue -Name $ACCESS_GPO_NAME -Key "HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\SystemCertificates\\Root\\Certificates\\$TELEPORT_CA_CERT_SHA1" -ValueName "Blob" -Type Binary -Value $CERT\n\n$TELEPORT_CA_CERT_PEM = "-----BEGIN CERTIFICATE-----\nMIIDsTCCApmgAwIBAgIRANcltrgI+zmQU9n1qiJyjcIwDQYJKoZIhvcNAQELBQAw\ncjEeMBwGA1UEChMVbG9jYWxob3N0LmxvY2FsZG9tYWluMR4wHAYDVQQDExVsb2Nh\nbGhvc3QubG9jYWxkb21haW4xMDAuBgNVBAUTJzI4NTk3OTg0MDA1NjgzMjA2MDgy\nMTc4NjI1NTA3OTA0MzY2NTM0NjAeFw0yMzA2MTkwOTU5NDNaFw0zMzA2MTYwOTU5\nNDNaMHIxHjAcBgNVBAoTFWxvY2FsaG9zdC5sb2NhbGRvbWFpbjEeMBwGA1UEAxMV\nbG9jYWxob3N0LmxvY2FsZG9tYWluMTAwLgYDVQQFEycyODU5Nzk4NDAwNTY4MzIw\nNjA4MjE3ODYyNTUwNzkwNDM2NjUzNDYwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw\nggEKAoIBAQDCW5U7tULeEo/vu7JzyXTxFWpKXWo2VQZSx+bAsoEOJtz8TWSsD5q2\n5MQxUrvgHKToktppTVuQlAS0oYcwr9eBk7cWoENY2/L5rxZ0jdelukJyO6D0xTgU\n2FLayvuZEUC5T94VwPsf6++F3BalG8QAZSnTDUnsKqqcozJ+fr6Rk4JNwi3dZr8S\njzNb9uctBpQCtbWsjZ02mrZyaJ0CLS1Slg1KGOG3CKkZDz7RlREcovHdRC6AceUO\nYMmCLFzhJCy+BzP3ROg8j23H7+SOLmLyiycfcjaIg5GlB2lS7WE6H0Eg1XzXnEaf\nh9fa+7PbzQvRPW8udqVAjFjOZcUnoS5TAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIB\npjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBT7gM+IbJmWvlAYDm6AI8Cxn1oo\nKzANBgkqhkiG9w0BAQsFAAOCAQEAQngU3v8Ylk4iplk4MM++ZcF98RRIKvUhnMLj\n59SJZJXaEQW1HLPgEcI9iKWuXA4Caw3fJBmQfH1XVHU9vej4DMZGDLG0+8r8pmkD\n9JMWQEpeNaoIop1stXS9U0ocflf7ZNqsiBdgkR+mlh/aEFMYPvASd3wNoWJLDg4/\nbM8YxQfJ2O1HbTR5mnU3wYtje8yuISSGpdhq7CRHgYvJqRlmUNJypKfdEB967g2P\nu0e0vQjRdPjQmMSGLZoJ4ZIGmDEGBDbh38Y1JMjzpAmXkReeBic4/mzjXm7DK7Vo\n3HIzxX6sz9uUpzOoeq04V0qjkgxnkzer87ikqi/4sIIteUgNIw==\n-----END CERTIFICATE-----\n"\n\n$TeleportPEMFile = $env:TEMP + "\\teleport.pem"\nWrite-Output $TELEPORT_CA_CERT_PEM | Out-File -FilePath $TeleportPEMFile\n\ncertutil -dspublish -f $TeleportPEMFile RootCA\ncertutil -dspublish -f $TeleportPEMFile NTAuthCA\ncertutil -pulse\n\n$ACCESS_SECURITY_TEMPLATE=@\'\n[Unicode]\nUnicode=yes\n[Version]\nsignature="$CHICAGO$"\n[Service General Setting]\n"SCardSvr",2,""\n\'@\n\n$COMMENT_XML=@\'\n<?xml version=\'1.0\' encoding=\'utf-8\'?>\n<policyComments xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" revision="1.0" schemaVersion="1.0" xmlns="http://www.microsoft.com/GroupPolicy/CommentDefinitions">\n  <policyNamespaces>\n    <using prefix="ns0" namespace="Microsoft.Policies.TerminalServer"></using>\n  </policyNamespaces>\n  <comments>\n    <admTemplate></admTemplate>\n  </comments>\n  <resources minRequiredRevision="1.0">\n    <stringTable></stringTable>\n  </resources>\n</policyComments>\n\'@\n\n\n$ACCESS_POLICY_GUID=$ACCESS_GPO.Id.Guid.ToUpper()\n$ACCESS_GPO_PATH="$env:SystemRoot\\SYSVOL\\sysvol\\$DOMAIN_NAME\\Policies\\{$ACCESS_POLICY_GUID}\\Machine\\Microsoft\\Windows NT\\SecEdit"\n\nNew-Item -Force -Type Directory -Path $ACCESS_GPO_PATH\nNew-Item -Force -Path $ACCESS_GPO_PATH -Name "GptTmpl.inf" -ItemType "file" -Value $ACCESS_SECURITY_TEMPLATE\nNew-Item -Force -Path "$env:SystemRoot\\SYSVOL\\sysvol\\$DOMAIN_NAME\\Policies\\{$ACCESS_POLICY_GUID}\\Machine" -Name "comment.cmtx" -ItemType "file" -Value $COMMENT_XML\n\n# Firewall\n$FIREWALL_USER_MODE_IN_TCP = "v2.31|Action=Allow|Active=TRUE|Dir=In|Protocol=6|LPort=3389|App=%SystemRoot%\\system32\\svchost.exe|Svc=termservice|Name=@FirewallAPI.dll,-28775|Desc=@FirewallAPI.dll,-28756|EmbedCtxt=@FirewallAPI.dll,-28752|"\nSet-GPRegistryValue -Name $ACCESS_GPO_NAME -Key "HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\WindowsFirewall" -ValueName "PolicyVersion" -Type DWORD -Value 543\nSet-GPRegistryValue -Name $ACCESS_GPO_NAME -Type String -Key "HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\WindowsFirewall\\FirewallRules" -ValueName "RemoteDesktop-UserMode-In-TCP" -Value $FIREWALL_USER_MODE_IN_TCP\n\n\n# Allow remote RDP connections\nSet-GPRegistryValue -Name $ACCESS_GPO_NAME -Key "HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows NT\\Terminal Services" -ValueName "fDenyTSConnections" -Type DWORD -Value 0\nSet-GPRegistryValue -Name $ACCESS_GPO_NAME -Key "HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows NT\\Terminal Services" -ValueName "UserAuthentication" -Type DWORD -Value 0\n\n# Disable "Always prompt for password upon connection"\nSet-GPRegistryValue -Name $ACCESS_GPO_NAME -Key "HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows NT\\Terminal Services" -ValueName "fPromptForPassword" -Type DWORD -Value 0\n\n# # Step 5/7. Export your LDAP CA certificate\n$WindowsDERFile = $env:TEMP + "\\windows.der"\n$WindowsPEMFile = $env:TEMP + "\\windows.pem"\ncertutil "-ca.cert" $WindowsDERFile \ncertutil -encode $WindowsDERFile $WindowsPEMFile\n\ngpupdate.exe /force\n\n$CA_CERT_PEM = Get-Content -Path $WindowsPEMFile\n$CA_CERT_YAML = $CA_CERT_PEM | ForEach-Object { "        " + $_  } | Out-String\n\n\n$NET_BIOS_NAME = (Get-ADDomain).NetBIOSName\n$LDAP_USERNAME = "$NET_BIOS_NAME\\$SAM_ACCOUNT_NAME"\n$LDAP_USER_SID=(Get-ADUser -Identity $SAM_ACCOUNT_NAME).SID.Value\n\n$COMPUTER_NAME = (Resolve-DnsName -Type A $Env:COMPUTERNAME).Name\n$COMPUTER_IP = (Resolve-DnsName -Type A $Env:COMPUTERNAME).Address\n$LDAP_ADDR="$COMPUTER_IP" + ":636"\n\n$DESKTOP_ACCESS_CONFIG_YAML=@"\nversion: v3\nteleport:\n  auth_token: $TELEPORT_PROVISION_TOKEN\n  proxy_server: $TELEPORT_PROXY_PUBLIC_ADDR\n\nauth_service:\n  enabled: no\nssh_service:\n  enabled: no\nproxy_service:\n  enabled: no\n\nwindows_desktop_service:\n  enabled: yes\n  ldap:\n    addr:     \'$LDAP_ADDR\'\n    domain:   \'$DOMAIN_NAME\'\n    username: \'$LDAP_USERNAME\'\n    sid: \'$LDAP_USER_SID\'\n    server_name: \'$COMPUTER_NAME\'\n    insecure_skip_verify: false\n    ldap_ca_cert: |\n$CA_CERT_YAML\n  discovery:\n    base_dn: \'*\'\n  labels:\n    teleport.internal/resource-id: $TELEPORT_INTERNAL_RESOURCE_ID\n"@\n\n$OUTPUT=@\'\n\nUse the following teleport.yaml to start a Windows Desktop Service.\nFor a detailed configuration reference, see\n\nhttps://goteleport.com/docs/desktop-access/reference/configuration/\n\n\n{0}\n\n\'@ -f $DESKTOP_ACCESS_CONFIG_YAML\n\n$WHITESPACE_WARNING=@\'\n# WARNING:\n# When copying and pasting the config from below, PowerShell ISE will add whitespace to the start - delete this before you save the config.\n\'@\n\nif ($host.name -match \'ISE\')\n{\n  Write-Output $WHITESPACE_WARNING\n}\n\nWrite-Output $OUTPUT\n\n# cleanup files that were created during execution of this script\nRemove-Item $TeleportPEMFile -Recurse\nRemove-Item $WindowsDERFile -Recurse\nRemove-Item $WindowsPEMFile -Recurse\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br"),n("span",{staticClass:"line-number"},[s._v("131")]),n("br"),n("span",{staticClass:"line-number"},[s._v("132")]),n("br"),n("span",{staticClass:"line-number"},[s._v("133")]),n("br"),n("span",{staticClass:"line-number"},[s._v("134")]),n("br"),n("span",{staticClass:"line-number"},[s._v("135")]),n("br"),n("span",{staticClass:"line-number"},[s._v("136")]),n("br"),n("span",{staticClass:"line-number"},[s._v("137")]),n("br"),n("span",{staticClass:"line-number"},[s._v("138")]),n("br"),n("span",{staticClass:"line-number"},[s._v("139")]),n("br"),n("span",{staticClass:"line-number"},[s._v("140")]),n("br"),n("span",{staticClass:"line-number"},[s._v("141")]),n("br"),n("span",{staticClass:"line-number"},[s._v("142")]),n("br"),n("span",{staticClass:"line-number"},[s._v("143")]),n("br"),n("span",{staticClass:"line-number"},[s._v("144")]),n("br"),n("span",{staticClass:"line-number"},[s._v("145")]),n("br"),n("span",{staticClass:"line-number"},[s._v("146")]),n("br"),n("span",{staticClass:"line-number"},[s._v("147")]),n("br"),n("span",{staticClass:"line-number"},[s._v("148")]),n("br"),n("span",{staticClass:"line-number"},[s._v("149")]),n("br"),n("span",{staticClass:"line-number"},[s._v("150")]),n("br"),n("span",{staticClass:"line-number"},[s._v("151")]),n("br"),n("span",{staticClass:"line-number"},[s._v("152")]),n("br"),n("span",{staticClass:"line-number"},[s._v("153")]),n("br"),n("span",{staticClass:"line-number"},[s._v("154")]),n("br"),n("span",{staticClass:"line-number"},[s._v("155")]),n("br"),n("span",{staticClass:"line-number"},[s._v("156")]),n("br"),n("span",{staticClass:"line-number"},[s._v("157")]),n("br"),n("span",{staticClass:"line-number"},[s._v("158")]),n("br"),n("span",{staticClass:"line-number"},[s._v("159")]),n("br"),n("span",{staticClass:"line-number"},[s._v("160")]),n("br"),n("span",{staticClass:"line-number"},[s._v("161")]),n("br"),n("span",{staticClass:"line-number"},[s._v("162")]),n("br"),n("span",{staticClass:"line-number"},[s._v("163")]),n("br"),n("span",{staticClass:"line-number"},[s._v("164")]),n("br"),n("span",{staticClass:"line-number"},[s._v("165")]),n("br"),n("span",{staticClass:"line-number"},[s._v("166")]),n("br"),n("span",{staticClass:"line-number"},[s._v("167")]),n("br"),n("span",{staticClass:"line-number"},[s._v("168")]),n("br"),n("span",{staticClass:"line-number"},[s._v("169")]),n("br"),n("span",{staticClass:"line-number"},[s._v("170")]),n("br"),n("span",{staticClass:"line-number"},[s._v("171")]),n("br"),n("span",{staticClass:"line-number"},[s._v("172")]),n("br"),n("span",{staticClass:"line-number"},[s._v("173")]),n("br"),n("span",{staticClass:"line-number"},[s._v("174")]),n("br"),n("span",{staticClass:"line-number"},[s._v("175")]),n("br"),n("span",{staticClass:"line-number"},[s._v("176")]),n("br"),n("span",{staticClass:"line-number"},[s._v("177")]),n("br"),n("span",{staticClass:"line-number"},[s._v("178")]),n("br"),n("span",{staticClass:"line-number"},[s._v("179")]),n("br"),n("span",{staticClass:"line-number"},[s._v("180")]),n("br"),n("span",{staticClass:"line-number"},[s._v("181")]),n("br"),n("span",{staticClass:"line-number"},[s._v("182")]),n("br"),n("span",{staticClass:"line-number"},[s._v("183")]),n("br"),n("span",{staticClass:"line-number"},[s._v("184")]),n("br"),n("span",{staticClass:"line-number"},[s._v("185")]),n("br"),n("span",{staticClass:"line-number"},[s._v("186")]),n("br"),n("span",{staticClass:"line-number"},[s._v("187")]),n("br"),n("span",{staticClass:"line-number"},[s._v("188")]),n("br"),n("span",{staticClass:"line-number"},[s._v("189")]),n("br"),n("span",{staticClass:"line-number"},[s._v("190")]),n("br"),n("span",{staticClass:"line-number"},[s._v("191")]),n("br"),n("span",{staticClass:"line-number"},[s._v("192")]),n("br"),n("span",{staticClass:"line-number"},[s._v("193")]),n("br"),n("span",{staticClass:"line-number"},[s._v("194")]),n("br"),n("span",{staticClass:"line-number"},[s._v("195")]),n("br"),n("span",{staticClass:"line-number"},[s._v("196")]),n("br"),n("span",{staticClass:"line-number"},[s._v("197")]),n("br"),n("span",{staticClass:"line-number"},[s._v("198")]),n("br"),n("span",{staticClass:"line-number"},[s._v("199")]),n("br"),n("span",{staticClass:"line-number"},[s._v("200")]),n("br"),n("span",{staticClass:"line-number"},[s._v("201")]),n("br"),n("span",{staticClass:"line-number"},[s._v("202")]),n("br"),n("span",{staticClass:"line-number"},[s._v("203")]),n("br"),n("span",{staticClass:"line-number"},[s._v("204")]),n("br"),n("span",{staticClass:"line-number"},[s._v("205")]),n("br"),n("span",{staticClass:"line-number"},[s._v("206")]),n("br"),n("span",{staticClass:"line-number"},[s._v("207")]),n("br"),n("span",{staticClass:"line-number"},[s._v("208")]),n("br"),n("span",{staticClass:"line-number"},[s._v("209")]),n("br"),n("span",{staticClass:"line-number"},[s._v("210")]),n("br"),n("span",{staticClass:"line-number"},[s._v("211")]),n("br"),n("span",{staticClass:"line-number"},[s._v("212")]),n("br"),n("span",{staticClass:"line-number"},[s._v("213")]),n("br"),n("span",{staticClass:"line-number"},[s._v("214")]),n("br"),n("span",{staticClass:"line-number"},[s._v("215")]),n("br"),n("span",{staticClass:"line-number"},[s._v("216")]),n("br"),n("span",{staticClass:"line-number"},[s._v("217")]),n("br"),n("span",{staticClass:"line-number"},[s._v("218")]),n("br"),n("span",{staticClass:"line-number"},[s._v("219")]),n("br"),n("span",{staticClass:"line-number"},[s._v("220")]),n("br"),n("span",{staticClass:"line-number"},[s._v("221")]),n("br"),n("span",{staticClass:"line-number"},[s._v("222")]),n("br"),n("span",{staticClass:"line-number"},[s._v("223")]),n("br"),n("span",{staticClass:"line-number"},[s._v("224")]),n("br"),n("span",{staticClass:"line-number"},[s._v("225")]),n("br"),n("span",{staticClass:"line-number"},[s._v("226")]),n("br"),n("span",{staticClass:"line-number"},[s._v("227")]),n("br"),n("span",{staticClass:"line-number"},[s._v("228")]),n("br"),n("span",{staticClass:"line-number"},[s._v("229")]),n("br"),n("span",{staticClass:"line-number"},[s._v("230")]),n("br"),n("span",{staticClass:"line-number"},[s._v("231")]),n("br"),n("span",{staticClass:"line-number"},[s._v("232")]),n("br"),n("span",{staticClass:"line-number"},[s._v("233")]),n("br"),n("span",{staticClass:"line-number"},[s._v("234")]),n("br"),n("span",{staticClass:"line-number"},[s._v("235")]),n("br"),n("span",{staticClass:"line-number"},[s._v("236")]),n("br"),n("span",{staticClass:"line-number"},[s._v("237")]),n("br"),n("span",{staticClass:"line-number"},[s._v("238")]),n("br"),n("span",{staticClass:"line-number"},[s._v("239")]),n("br"),n("span",{staticClass:"line-number"},[s._v("240")]),n("br"),n("span",{staticClass:"line-number"},[s._v("241")]),n("br"),n("span",{staticClass:"line-number"},[s._v("242")]),n("br"),n("span",{staticClass:"line-number"},[s._v("243")]),n("br"),n("span",{staticClass:"line-number"},[s._v("244")]),n("br"),n("span",{staticClass:"line-number"},[s._v("245")]),n("br"),n("span",{staticClass:"line-number"},[s._v("246")]),n("br"),n("span",{staticClass:"line-number"},[s._v("247")]),n("br"),n("span",{staticClass:"line-number"},[s._v("248")]),n("br"),n("span",{staticClass:"line-number"},[s._v("249")]),n("br"),n("span",{staticClass:"line-number"},[s._v("250")]),n("br"),n("span",{staticClass:"line-number"},[s._v("251")]),n("br"),n("span",{staticClass:"line-number"},[s._v("252")]),n("br"),n("span",{staticClass:"line-number"},[s._v("253")]),n("br"),n("span",{staticClass:"line-number"},[s._v("254")]),n("br"),n("span",{staticClass:"line-number"},[s._v("255")]),n("br"),n("span",{staticClass:"line-number"},[s._v("256")]),n("br"),n("span",{staticClass:"line-number"},[s._v("257")]),n("br"),n("span",{staticClass:"line-number"},[s._v("258")]),n("br"),n("span",{staticClass:"line-number"},[s._v("259")]),n("br"),n("span",{staticClass:"line-number"},[s._v("260")]),n("br"),n("span",{staticClass:"line-number"},[s._v("261")]),n("br"),n("span",{staticClass:"line-number"},[s._v("262")]),n("br"),n("span",{staticClass:"line-number"},[s._v("263")]),n("br"),n("span",{staticClass:"line-number"},[s._v("264")]),n("br"),n("span",{staticClass:"line-number"},[s._v("265")]),n("br"),n("span",{staticClass:"line-number"},[s._v("266")]),n("br"),n("span",{staticClass:"line-number"},[s._v("267")]),n("br"),n("span",{staticClass:"line-number"},[s._v("268")]),n("br"),n("span",{staticClass:"line-number"},[s._v("269")]),n("br"),n("span",{staticClass:"line-number"},[s._v("270")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);