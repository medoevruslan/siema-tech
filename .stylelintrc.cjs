module.exports = {
    extends: ['stylelint-config-recommended', 'stylelint-config-clean-order', 'stylelint-config-css-modules'],
    rules: {
        'custom-property-pattern': null,
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
