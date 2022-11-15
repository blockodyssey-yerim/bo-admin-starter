module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'airbnb',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: '12',
        sourceType: 'module'
    },
    plugins: ['react', 'prettier', '@typescript-eslint', 'import'],
    rules: {
        'import/extensions': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'prettier/prettier': 'off',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'builtin',
                        position: 'before'
                    },
                    {
                        pattern: '@mui/**/*',
                        group: 'external',
                        position: 'after'
                    },
                    {
                        pattern: 'slices/**',
                        group: 'internal',
                        position: 'before'
                    },
                    {
                        pattern: 'hooks/**',
                        group: 'internal',
                        position: 'before'
                    },
                    {
                        pattern: 'assets/**',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: 'configs/**',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: 'constants/**',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: 'styles/**',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: 'utils/**',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: 'types/**',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: '*.+(css|scss)',
                        patternOptions: {
                            dot: true,
                            nocomment: true,
                            matchBase: true
                        },
                        group: 'object',
                        position: 'after'
                    }
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                },
                warnOnUnassignedImports: true
            }
        ],
        'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/no-extraneous-dependencies': 'off',
        'react/function-component-definition': 'off',
        'no-param-reassign': 'off',
        'react/forbid-prop-types': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'no-alert': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-return-assign': 'off',
        'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
        'no-shadow': 'off',
        'no-nested-ternary': 'off',
        'no-unneeded-ternary': 'off',
        'react/no-array-index-key': 'off',
        'prefer-promise-reject-errors': 'off',
        'global-require': 'off',
        'no-restricted-syntax': 'off',
        '@typescript-eslint/no-empty-function': 'off'
    },
    settings: {
        'import/resolver': {
            typescript: {},
            node: {
                paths: ['default/src', 'src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    }
};
