import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
    monaco.languages.register({ id: 'azlang' })

    monaco.languages.setMonarchTokensProvider('azlang', {
        defaultToken: '',
        tokenPostfix: '.azlang',

        keywords: [
            'sabit', 'dəyişən', 'funksiya', 'qaytar', 'əgər', 'əks_halda',
            'üçün', 'hər_üçün', 'növ', 'uyğun', 'kəsmək', 'davam_etmək',
            'doğru', 'yalan', 'boş', 'idxal', 'modul', 'sinif', 'miras',
            'konstruktor', 'metod', 'publik', 'şəxsi', 'qorunan', 'interfeys',
            'implementasiya', 'asinxron', 'gözlə', 'işləmə', 'səhv_tut',
            'son_olaraq'
        ],

        typeKeywords: [
            'simvol', 'ədəd', 'mətn', 'böyükədəd', 'həqiqi', 'məntiqi'
        ],

        operators: [
            '=', '>', '<', '!', '~', '?', ':', '==', '<=', '>=', '!=',
            '&&', '||', '++', '--', '+', '-', '*', '/', '&', '|', '^', '%',
            '<<', '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=', '^=',
            '%=', '<<=', '>>=', '>>>='
        ],

        symbols: /[=><!~?:&|+\-*/^%]+/,

        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

        tokenizer: {
            root: [
                // identifiers and keywords
                [/[a-zA-Z_][a-zA-Z0-9_]*/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@typeKeywords': 'type',
                        '@default': 'identifier'
                    }
                }],

                // whitespace
                { include: '@whitespace' },

                // numbers
                [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                [/\d+/, 'number'],

                // strings
                [/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
                [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],

                // comments
                [/\/\/.*$/, 'comment'], // Single-line comments
                [/\/\*/, { token: 'comment.block', bracket: '@open', next: '@comment' }], // Multi-line comments

                // delimiters and operators
                [/[{}()[\]]/, '@brackets'],
                [/@symbols/, {
                    cases: {
                        '@operators': 'operator',
                        '@default': ''
                    }
                }],
            ],

            comment: [
                [/[^/*]+/, 'comment.block'],
                [/\*\//, { token: 'comment.block', bracket: '@close', next: '@pop' }],
                [/[/*]/, 'comment.block']
            ],

            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],

            whitespace: [
                [/[ \t\r\n]+/, 'white'],
            ],
        },
    })

    // Optionally, set a default theme or customize colors
    // monaco.editor.defineTheme('azlang-theme', {
    //   base: 'vs-dark', // or 'vs' or 'hc-black'
    //   inherit: true,
    //   rules: [
    //     { token: 'keyword', foreground: '569CD6' }, // Blue
    //     { token: 'type', foreground: '4EC9B0' },    // Teal
    //     { token: 'string', foreground: 'D69D85' },  // Orange
    //     { token: 'comment', foreground: '6A9955' }, // Green
    //     { token: 'number', foreground: 'B5CEA8' }   // Light Green
    //   ],
    //   colors: {
    //     // 'editor.background': '#282C34'
    //   }
    // });
    // monaco.editor.setTheme('azlang-theme');
})