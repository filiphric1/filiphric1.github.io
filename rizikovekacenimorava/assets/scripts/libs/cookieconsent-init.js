// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'cs',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false

    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: false,                  // default: false
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'cs': {
            consent_modal: {
                title: 'Používáme cookies 🍪',
                description: 'Tyto webové stránky používají cookies soubory k pochopení toho, jak s webem pracujete. Ty se nastavují pouze po souhlasu. <button type="button" data-cc="c-settings" class="cc-link">Nastavení cookies</button>',
                primary_btn: {
                    text: 'Souhlasím',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Nesouhlasím',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Nastavení cookies',
                save_settings_btn: 'Uložit nastavení',
                accept_all_btn: 'Přijmout vše',
                reject_all_btn: 'Odmítnout vše',
                close_btn_label: 'Zavřít',
                cookie_table_headers: [
                    {col1: 'Název'},
                    {col2: 'Doména'},
                    {col3: 'Expirace'},
                    {col4: 'Popis'}
                ],
                blocks: [
                    {
                        title: 'Používání cookies 📢',
                        description: 'Soubory cookie používáme k zajištění základních funkcí webových stránek a ke zlepšení vašeho online zážitku. U každé kategorie si můžete zvolit, zda se chcete přihlásit nebo odhlásit, kdykoli budete chtít.'
                    }, {
                        title: 'Nezbytné soubory cookie',
                        description: 'Tyto soubory cookie jsou nezbytné pro správné fungování mých webových stránek. Bez těchto souborů cookie by webové stránky nefungovaly správně.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Analytické soubory cookie',
                        description: 'Tyto soubory cookie umožňují webové stránce zapamatovat si volby, které jste provedli v minulosti.',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        }
                    }
                ]
            }
        }
    }
});