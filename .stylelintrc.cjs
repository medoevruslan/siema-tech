module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-clean-order', 'stylelint-prettier'],
    rules: {
        'custom-property-pattern': 'null',
        'custom-property-empty-line-before': 'null',
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ['composes'],
            },
        ],
        'selector-class-pattern': null,
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global'],
            },
        ],
    },
}
