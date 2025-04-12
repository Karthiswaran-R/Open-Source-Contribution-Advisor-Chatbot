module.exports = {

"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/@langchain/openai [external] (@langchain/openai, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("@langchain/openai");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/langchain/agents [external] (langchain/agents, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("langchain/agents");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/zod [external] (zod, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("zod");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/langchain/tools [external] (langchain/tools, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("langchain/tools");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/dotenv [external] (dotenv, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("dotenv", () => require("dotenv"));

module.exports = mod;
}}),
"[externals]/node-fetch [external] (node-fetch, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node-fetch", () => require("node-fetch"));

module.exports = mod;
}}),
"[project]/utils/langchain_tools.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
// tools/langchain_tools.js
__turbopack_context__.s({
    "compare_guidelines": (()=>compare_guidelines),
    "fetch_good_first_issues": (()=>fetch_good_first_issues),
    "fetch_top_repositories": (()=>fetch_top_repositories)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/zod [external] (zod, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$tools__$5b$external$5d$__$28$langchain$2f$tools$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/langchain/tools [external] (langchain/tools, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dotenv__$5b$external$5d$__$28$dotenv$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dotenv [external] (dotenv, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$fetch__$5b$external$5d$__$28$node$2d$fetch$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node-fetch [external] (node-fetch, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$tools__$5b$external$5d$__$28$langchain$2f$tools$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$tools__$5b$external$5d$__$28$langchain$2f$tools$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
__TURBOPACK__imported__module__$5b$externals$5d2f$dotenv__$5b$external$5d$__$28$dotenv$2c$__cjs$29$__["default"].config();
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const headers = {
    Accept: "application/vnd.github+json",
    ...GITHUB_TOKEN && {
        Authorization: `Bearer ${GITHUB_TOKEN}`
    }
};
const fetch_top_repositories = new __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$tools__$5b$external$5d$__$28$langchain$2f$tools$2c$__esm_import$29$__["DynamicStructuredTool"]({
    name: "fetch_top_repositories",
    description: "Fetches top 5 repositories for a given GitHub topic.",
    schema: __TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__["z"].object({
        topic: __TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__["z"].string().describe("The GitHub topic (e.g., 'react', 'ai')")
    }),
    func: async ({ topic })=>{
        const response = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$fetch__$5b$external$5d$__$28$node$2d$fetch$2c$__cjs$29$__["default"])(`https://api.github.com/search/repositories?q=topic:${topic}&sort=stars&order=desc&per_page=5`, {
            headers
        });
        const data = await response.json();
        if (!data.items) return `No repositories found for topic "${topic}".`;
        return data.items.map((repo, i)=>`${i + 1}. ${repo.full_name} - ⭐ ${repo.stargazers_count}`).join("\n");
    }
});
const fetch_good_first_issues = new __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$tools__$5b$external$5d$__$28$langchain$2f$tools$2c$__esm_import$29$__["DynamicStructuredTool"]({
    name: "fetch_good_first_issues",
    description: "Fetches good first issues from a GitHub repository.",
    schema: __TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__["z"].object({
        repo: __TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__["z"].string().describe("Repository in 'owner/repo' format")
    }),
    func: async ({ repo })=>{
        const response = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$fetch__$5b$external$5d$__$28$node$2d$fetch$2c$__cjs$29$__["default"])(`https://api.github.com/repos/${repo}/issues?labels=good%20first%20issue&state=open&per_page=5`, {
            headers
        });
        const data = await response.json();
        if (!Array.isArray(data)) return `No good first issues found for "${repo}".`;
        return data.map((issue, i)=>`${i + 1}. ${issue.title} - ${issue.html_url}`).join("\n");
    }
});
const compare_guidelines = new __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$tools__$5b$external$5d$__$28$langchain$2f$tools$2c$__esm_import$29$__["DynamicStructuredTool"]({
    name: "compare_guidelines",
    description: "Compares contribution guidelines of two repositories.",
    schema: __TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__["z"].object({
        repo1: __TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__["z"].string().describe("First GitHub repo (owner/repo)"),
        repo2: __TURBOPACK__imported__module__$5b$externals$5d2f$zod__$5b$external$5d$__$28$zod$2c$__esm_import$29$__["z"].string().describe("Second GitHub repo (owner/repo)")
    }),
    func: async ({ repo1, repo2 })=>{
        const fetchGuidelines = async (repo)=>{
            const response = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$fetch__$5b$external$5d$__$28$node$2d$fetch$2c$__cjs$29$__["default"])(`https://raw.githubusercontent.com/${repo}/main/CONTRIBUTING.md`);
            return response.ok ? await response.text() : `No CONTRIBUTING.md found in ${repo}`;
        };
        const [guideline1, guideline2] = await Promise.all([
            fetchGuidelines(repo1),
            fetchGuidelines(repo2)
        ]);
        return `🔹 Guidelines for ${repo1}:\n${guideline1.slice(0, 500)}...\n\n` + `🔸 Guidelines for ${repo2}:\n${guideline2.slice(0, 500)}...`;
    }
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/api/chat.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
// pages/api/chat.js
__turbopack_context__.s({
    "default": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$langchain$2f$openai__$5b$external$5d$__$2840$langchain$2f$openai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@langchain/openai [external] (@langchain/openai, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$agents__$5b$external$5d$__$28$langchain$2f$agents$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/langchain/agents [external] (langchain/agents, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$langchain_tools$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/langchain_tools.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dotenv__$5b$external$5d$__$28$dotenv$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dotenv [external] (dotenv, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$langchain$2f$openai__$5b$external$5d$__$2840$langchain$2f$openai$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$agents__$5b$external$5d$__$28$langchain$2f$agents$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$langchain_tools$2e$js__$5b$api$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f40$langchain$2f$openai__$5b$external$5d$__$2840$langchain$2f$openai$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$agents__$5b$external$5d$__$28$langchain$2f$agents$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$langchain_tools$2e$js__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
__TURBOPACK__imported__module__$5b$externals$5d2f$dotenv__$5b$external$5d$__$28$dotenv$2c$__cjs$29$__["default"].config();
const groq_api_key = process.env.GROQ_API_KEY;
if (!groq_api_key) {
    throw new Error('GROQ_API_KEY is missing. Set it in .env');
}
const tools = [
    __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$langchain_tools$2e$js__$5b$api$5d$__$28$ecmascript$29$__["fetch_top_repositories"],
    __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$langchain_tools$2e$js__$5b$api$5d$__$28$ecmascript$29$__["fetch_good_first_issues"],
    __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$langchain_tools$2e$js__$5b$api$5d$__$28$ecmascript$29$__["compare_guidelines"]
];
let agentPromise = null;
const skillMap = {
    js: 'JavaScript',
    javascript: 'JavaScript',
    py: 'Python',
    python: 'Python',
    cpp: 'C++',
    cplusplus: 'C++',
    c: 'C',
    csharp: 'C#',
    ts: 'TypeScript',
    typescript: 'TypeScript',
    go: 'Go',
    rust: 'Rust',
    java: 'Java',
    html: 'HTML',
    verilog: 'Verilog',
    hdl: 'HDL',
    dart: 'Dart',
    zig: 'Zig',
    elixir: 'Elixir'
};
function extractSkills(message) {
    const matches = message.match(/\b[A-Za-z\+\#]+\b/g);
    if (!matches) return [
        'general'
    ];
    const filtered = matches.filter((word)=>word.length > 1 && /^[A-Za-z\+\#]+$/.test(word));
    const normalized = filtered.map((skill)=>{
        const key = skill.toLowerCase();
        return skillMap[key] || skill;
    });
    return [
        ...new Set(normalized)
    ];
}
function getAgent() {
    if (!agentPromise) {
        const llm = new __TURBOPACK__imported__module__$5b$externals$5d2f40$langchain$2f$openai__$5b$external$5d$__$2840$langchain$2f$openai$2c$__esm_import$29$__["ChatOpenAI"]({
            temperature: 0,
            modelName: 'llama3-70b-8192',
            openAIApiKey: groq_api_key,
            streaming: true,
            callbacks: [],
            configuration: {
                baseURL: 'https://api.groq.com/openai/v1'
            }
        });
        agentPromise = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$agents__$5b$external$5d$__$28$langchain$2f$agents$2c$__esm_import$29$__["initializeAgentExecutorWithOptions"])(tools, llm, {
            agentType: 'structured-chat-zero-shot-react-description',
            verbose: true
        });
    }
    return agentPromise;
}
async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Only POST requests allowed'
        });
    }
    const { message } = req.body;
    if (!message || typeof message !== 'string' || message.trim() === '') {
        return res.status(400).json({
            error: 'Input query is required.'
        });
    }
    try {
        console.log('🔍 Input:', message);
        const skills = extractSkills(message);
        console.log('🧠 Extracted Skills:', skills);
        const agent = await getAgent();
        let fullResponse = '';
        const result = await agent.invoke({
            input: message,
            skills
        });
        console.log('✅ Agent result:', result);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            reply: result.output || 'No response generated.'
        });
    } catch (error) {
        console.error('❌ Agent error:', error.message);
        res.status(500).json({
            error: 'Agent failed to respond.',
            details: error.message
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/next/dist/esm/server/route-modules/pages-api/module.compiled.js [api] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time truthy", 1) {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    } else {
        "TURBOPACK unreachable";
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RouteKind": (()=>RouteKind)
});
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({}); //# sourceMappingURL=route-kind.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/helpers.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ __turbopack_context__.s({
    "hoist": (()=>hoist)
});
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ('then' in module && typeof module.then === 'function') {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === 'function' && name === 'default') {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
} //# sourceMappingURL=helpers.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/pages-api.js { INNER_PAGE => \"[project]/pages/api/chat.js [api] (ecmascript)\" } [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__),
    "routeModule": (()=>routeModule)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/pages-api/module.compiled.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/build/templates/helpers.js [api] (ecmascript)");
// Import the userland code.
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$chat$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/api/chat.js [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$chat$2e$js__$5b$api$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$chat$2e$js__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$chat$2e$js__$5b$api$5d$__$28$ecmascript$29$__, 'default');
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$chat$2e$js__$5b$api$5d$__$28$ecmascript$29$__, 'config');
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__["PagesAPIRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API,
        page: "/api/chat",
        pathname: "/api/chat",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$chat$2e$js__$5b$api$5d$__$28$ecmascript$29$__
}); //# sourceMappingURL=pages-api.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a9738dc9._.js.map