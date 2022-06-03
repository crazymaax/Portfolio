import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

:root {
	--toastify-color-success: #1A93CD;
	--toastify-icon-color-success: #1A93CD;
	--toastify-font-family: 'Poppins', sans-serif;
}

.Toastify__toast {
	margin-top: 30px;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

html {
	scroll-behavior: smooth;
}

::-webkit-scrollbar {
	display: none;
}

body {
	line-height: 1.7;
	font-family: 'Poppins', sans-serif;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.terciary};
	transition: all 0.3s;
}

section {
	margin-top: 8rem;
	width: 75%;
    margin: 8rem auto;
	padding-top: 20px;
	display: flex;
    flex-direction: column;
    text-align: justify;

	h5, h2 {
        text-align: center;
    }

    h2 {
        margin-bottom: 30px;
        color: ${(props) => props.theme.quinternary};
        font-weight: 700;
        font-size: 1.8rem;
    }
}

a {
	color: ${(props) => props.theme.quinternary};
	transition: all 400ms ease;
	text-decoration: none;
	&:hover {
		color: ${(props) => props.theme.terciary};
	}
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}
`