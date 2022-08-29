export enum RouteName {
    DOMU = "/",
    O_NAS = "/o-nas",
    CO_DELAME = "/#co-delame",
    KONTAKT = "/kontakt",
    FOR_FOREIGN_CLIENTS = "/for-foreign-clients",

    ELEKTRO_EROZIVNI_REZANI = "/elektro-erozivni-rezani",
    OBECNE_O_ELEKTRO_EROZI = "/elektro-erozivni-rezani/obecne-o-elektro-erozi",
    CIM_PROGRAMUJEME = "/elektro-erozivni-rezani/cim-programujeme",
    CIM_REZEME = "/elektro-erozivni-rezani/cim-rezeme",
    CO_LZE_VYREZAT_NA_DRATOVCE = "/elektro-erozivni-rezani/co-lze-vyrezat-na-dratovce",

    SPOTREBNI_MATERIAL = "/spotrebni-material",
    CHEMIE = "/spotrebni-material/chemie",
    DEIONIZACNI_SMESI = "/spotrebni-material/deionizacni-smesi",
    DIELEKTRIKUM_PRO_HLOUBENI = "/spotrebni-material/dielektrikum-pro-hloubeni",
    DRATY_PRO_ELEKTROEROZI = "/spotrebni-material/draty-pro-elektroerozi",
    FILTRY = "/spotrebni-material/filtry",
    NAHRADNI_DILY = "/spotrebni-material/nahradni-dily",
    POLOTOVARY_PRO_VYROBU_ELEKTROD = "/spotrebni-material/polotovary-pro-vyrobu-elektrod",
    TRUBICKOVE_ELEKTRODY = "/spotrebni-material/trubickove-elektrody",
    UPINANI_A_NARADI_PRO_EDM = "/spotrebni-material/upinani-a-naradi-pro-edm",
    ZAVITOVE_ELEKTRODY = "/spotrebni-material/zavitove-elektrody",

    SERVISNI_CINNOST = "/servisni-cinnost",
    AUTORIZOVANY_SERVIS = "/servisni-cinnost/autorizovany-servis",
    DRATOVKY_ACCUTEX = "/servisni-cinnost/dratovky-accutex",
    NASE_PRODEJNI_POLITIKA = "/servisni-cinnost/nase-prodejni-politika",
    STARTOVACKY_DER = "/servisni-cinnost/startovacky-der",
}

export interface LinkType {
    value: string;
    href: RouteName | string;
}
