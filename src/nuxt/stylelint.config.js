module.exports = {
	// add your custom config here
	// https://stylelint.io/user-guide/configuration
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'if',
					'for',
					'else',
					'each',
					'mixin',
					'extend',
					'include',
					'content',
					'at-root',
					'function'
				]
			}
		],
		'order/order': [
			'custom-properties',
			'dollar-variables',
			'declarations',
			'rules'
		],
		indentation: 'tab'
	},
	extends: ['stylelint-logical-order']
};
