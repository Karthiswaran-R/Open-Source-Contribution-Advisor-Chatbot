module.exports = {

"[project]/components/ChatInterface.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ChatInterface)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatForm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatForm.js [ssr] (ecmascript)"); // Make sure this component exists and handles input correctly
'use client';
;
;
;
function ChatInterface() {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Send message to the server (for bot response)
    const handleSendMessage = async (message)=>{
        setMessages((prev)=>[
                ...prev,
                {
                    from: 'user',
                    text: message
                }
            ]);
        setLoading(true);
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    input: message
                })
            });
            if (!res.ok) {
                throw new Error('Failed to fetch');
            }
            const data = await res.json();
            setMessages((prev)=>[
                    ...prev,
                    {
                        from: 'bot',
                        text: data.output || 'No response generated.'
                    }
                ]);
        } catch (err) {
            console.error('Error:', err);
            setMessages((prev)=>[
                    ...prev,
                    {
                        from: 'bot',
                        text: '⚠️ Failed to reach the server.'
                    }
                ]);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: 700,
            margin: '0 auto',
            padding: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                style: {
                    textAlign: 'center'
                },
                children: "Open Source Advisor"
            }, void 0, false, {
                fileName: "[project]/components/ChatInterface.js",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    height: 400,
                    overflowY: 'auto',
                    backgroundColor: '#eee',
                    padding: 10,
                    borderRadius: 10,
                    marginBottom: 20
                },
                children: messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: msg.from === 'user' ? 'right' : 'left',
                            margin: '10px 0'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            style: {
                                display: 'inline-block',
                                backgroundColor: msg.from === 'user' ? '#d1f7ff' : '#fff',
                                padding: 10,
                                borderRadius: 10,
                                maxWidth: '80%'
                            },
                            children: msg.text
                        }, void 0, false, {
                            fileName: "[project]/components/ChatInterface.js",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/components/ChatInterface.js",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ChatInterface.js",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatForm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                onSendMessage: handleSendMessage,
                disabled: loading
            }, void 0, false, {
                fileName: "[project]/components/ChatInterface.js",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatInterface.js",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/ChatInterface.js [ssr] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/components/ChatInterface.js [ssr] (ecmascript)"));
}}),

};

//# sourceMappingURL=components_ChatInterface_8cde1ea6.js.map