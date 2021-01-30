!macro preInit
    SetRegView 64
    WriteRegExpandStr HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "D:\program files\SpringRain\iis"
    WriteRegExpandStr HkCU "${INSTALL_REGISTRY_KEY}" InstallLocation "D:\program files\SpringRain\iis"
    SetRegView 32
    WriteRegExpandStr HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "D:\program files\SpringRain\quasar-manage"
    WriteRegExpandStr HkCU "${INSTALL_REGISTRY_KEY}" InstallLocation "D:\program files\SpringRain\quasar-manage"
!macroend
