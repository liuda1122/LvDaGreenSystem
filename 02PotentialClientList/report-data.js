// ================================================================
// report-data.js - 绿色业务营销报告 数据文件 (双语版)
// 用法: var data = getReportData('zh');  // 或 getReportData('en')
// ================================================================

var REPORT_DATA = {}; // backward-compatible: will be set on DOMContentLoaded

function getReportData(lang) {
    lang = lang || 'zh';

    var data = {
        // ============================================================
        // 页面基础信息
        // ============================================================
        pageSubtitle: lang === 'zh' ? '浙江嘉化能源化工 · 绿色业务营销报告' : 'Zhejiang Jiahua Energy Chemical · Green Marketing Report',

        // ============================================================
        // 一、企业头部信息
        // ============================================================
        companyName: '浙江嘉化能源化工股份有限公司',
        statusBadge: lang === 'zh' ? '存续 · 上市主体' : 'Active · Listed Entity',
        greenBadge: lang === 'zh' ? '绿色化工领跑者' : 'Green Chemical Leader',
        listedTag: lang === 'zh' ? '上市公司' : 'Listed Company',
        highCarbonTag: lang === 'zh' ? '高碳排放行业' : 'High-Carbon Industry',
        creditCode: lang === 'zh' ? '统一社会信用代码：913300007463411432 | 成立日期：1998-04-03' : 'Credit Code: 913300007463411432 | Established: 1998-04-03',
        contactInfo: lang === 'zh' ? '电话：0573-85585096 | 地区：330400 | 行业：C26化学原料和化学制品制造业 / C2614有机化学原料制造' : 'Tel: 0573-85585096 | Region: 330400 | Industry: C26 Chemical Raw Materials / C2614 Organic Chemical Manufacturing',
        industryTags: lang === 'zh' ? '\n        <span class="px-3 py-1 text-xs rounded-full bg-white shadow-sm border border-slate-200 text-slate-600">危险废物处理处置</span>\n        <span class="px-3 py-1 text-xs rounded-full bg-green-50 text-green-700 border border-green-200">废气回收利用</span>\n    ' : '\n        <span class="px-3 py-1 text-xs rounded-full bg-white shadow-sm border border-slate-200 text-slate-600">Hazardous Waste Treatment</span>\n        <span class="px-3 py-1 text-xs rounded-full bg-green-50 text-green-700 border border-green-200">Waste Gas Recovery</span>\n    ',
        businessScope: lang === 'zh' ? '许可项目包括危险化学品生产/经营、发电/输电、危险废物经营；一般项目涵盖热力生产和供应、合同能源管理、非常规水源利用、污水处理、新兴能源技术研发、站用加氢及储氢设施、固体废物治理等。' : 'Permitted: hazardous chemical production/trading, power generation/transmission, hazardous waste operations. General: heat supply, energy management contracts, unconventional water utilization, wastewater treatment, emerging energy technology R&D, hydrogen refueling & storage, solid waste treatment.',
        greenTags: lang === 'zh' ? '\n        <span class="text-xs bg-white px-2 py-1 rounded border">2.5.2 危险废物处理处置</span>\n        <span class="text-xs bg-white px-2 py-1 rounded border">3.2.7 废气回收利用</span>\n        <span class="text-xs bg-white px-2 py-1 rounded border">氢能/热电联产</span>\n        <span class="text-xs bg-white px-2 py-1 rounded border">合同能源管理</span>\n    ' : '\n        <span class="text-xs bg-white px-2 py-1 rounded border">2.5.2 Hazardous Waste</span>\n        <span class="text-xs bg-white px-2 py-1 rounded border">3.2.7 Waste Gas Recovery</span>\n        <span class="text-xs bg-white px-2 py-1 rounded border">Hydrogen/Cogeneration</span>\n        <span class="text-xs bg-white px-2 py-1 rounded border">Energy Mgmt Contract</span>\n    ',
        footerMeta: lang === 'zh' ? '注册资本：13.56879522亿人民币 | 绿色制造体系：潜在绿色工厂/绿色供应链示范' : 'Registered Capital: 1.357B CNY | Green Mfg System: Candidate Green Factory/Supply Chain',

        // ============================================================
        // 二、行业分析
        // ============================================================
        section1Title: lang === 'zh' ? '一、行业分析 · 石化化工' : 'I. Industry Analysis · Petrochemical',
        section1Badge: lang === 'zh' ? '政策·行业' : 'Policy · Industry',

        s1_policy_title: lang === 'zh' ? '（一）政策规划' : '(A) Policy Plans',
        s1_policy_national: lang === 'zh' ?
            '\n        <p class="font-semibold text-slate-800">1.国家层面：2024年7月国务院办公厅《加快构建碳排放双控制度体系工作方案》</p>\n        <ul class="list-disc list-inside text-sm text-slate-600 space-y-1 mt-2">\n            <li>依托能源和工业统计、能源活动和工业生产过程碳排放核算、全国碳排放权交易市场等数据，开展化工、钢铁、有色、建材等重点行业碳排放核算。</li>\n            <li>对建设项目温室气体排放量和排放水平进行预测和评价，在电力、钢铁、建材、有色、石化、化工等重点行业开展温室气体排放环境影响评价。</li>\n            <li>聚焦电力、燃油、钢铁、电解铝、水泥、化肥、氢、石灰、玻璃、乙烯、合成氨、电石、甲醇、煤化工、动力电池、光伏、新能源汽车、电子电器等重点产品，组织制定发布产品碳足迹核算行业标准或团体标准。</li>\n        </ul>\n    ' :
            '\n        <p class="font-semibold text-slate-800">1. National Level: July 2024 State Council "Work Plan for Accelerating Carbon Emission Dual-Control System"</p>\n        <ul class="list-disc list-inside text-sm text-slate-600 space-y-1 mt-2">\n            <li>Conduct carbon accounting for key sectors (chemical, steel, non-ferrous, building materials) using energy/industrial statistics and national carbon trading data.</li>\n            <li>Forecast and evaluate GHG emissions for construction projects; conduct GHG environmental impact assessments in power, steel, building materials, non-ferrous, petrochemical, and chemical sectors.</li>\n            <li>Focus on key products (electricity, fuel, steel, aluminum, cement, fertilizer, hydrogen, lime, glass, ethylene, ammonia, carbide, methanol, coal chemicals, batteries, PV, EVs, electronics) to develop product carbon footprint accounting standards.</li>\n        </ul>\n    ',
        s1_policy_local: lang === 'zh' ?
            '\n        <p class="font-semibold text-slate-800">2.地方层面：浙江省政策</p>\n        <p class="text-sm text-slate-700"><span class="font-medium">《浙江省绿色石化（精细化工）产业集群建设行动方案》</span>：到2027年基本建成世界级绿色石化产业基地，集群规上企业营业收入达2万亿元，年产值超千亿元化工园区累计培育6个以上。</p>\n        <p class="text-sm text-slate-700 mt-1"><span class="font-medium">《浙江省化工园区评价认定管理办法》</span>：针对化工园区的认定、复核、扩园、调整、退出以及项目入园等事项管理作了明确规定。</p>\n    ' :
            '\n        <p class="font-semibold text-slate-800">2. Local Level: Zhejiang Province Policies</p>\n        <p class="text-sm text-slate-700"><span class="font-medium">Zhejiang Green Petrochemical (Fine Chemical) Industry Cluster Action Plan</span>: By 2027, establish a world-class green petrochemical base; cluster revenue target of 2 trillion CNY; cultivate 6+ chemical parks with annual output exceeding 100B CNY.</p>\n        <p class="text-sm text-slate-700 mt-1"><span class="font-medium">Zhejiang Chemical Park Evaluation & Management Measures</span>: Defines rules for park designation, review, expansion, adjustment, exit, and project admission.</p>\n    ',
        s1_policy_interpret: lang === 'zh' ?
            '\n        <span class="font-semibold">解读：</span>化工行业作为国民经济的基石，长期以来在能源消耗和碳排放方面占据较大比重，各类及各级低碳政策均把化工行业作为重点对象。化工行业企业需要加强碳足迹管理意识，从源头上控制碳排放，同时加大技术研发投入，开发低碳、环保的新产品和技术，关注提高产品的附加值和市场竞争力。化工园区是行业重要发展载体，成为产业转型升级的关键阵地。\n    ' :
            '\n        <span class="font-semibold">Interpretation: </span>As a cornerstone of the national economy, the chemical industry accounts for significant energy consumption and carbon emissions. Low-carbon policies at all levels prioritize this sector. Chemical enterprises must strengthen carbon footprint management, control emissions at source, increase R&D investment, develop low-carbon products and technologies, and enhance product value and market competitiveness. Chemical parks serve as critical platforms for industrial transformation and upgrading.\n    ',

        s1_industry_title: lang === 'zh' ? '（二）行业格局' : '(B) Industry Landscape',
        s1_industry_chain: lang === 'zh' ? '<span class="font-bold">产业链结构</span><br>上游：原油/轻烃/芳烃 → 中游：炼油、乙烯/丙烯制备、基础化工品 → 下游：合成材料/化工新材料/精细化学品 → 终端：新能源、汽车、电子信息、家电、纺织化纤与高端装备。' : '<span class="font-bold">Industry Chain</span><br>Upstream: Crude oil/light hydrocarbons/aromatics → Midstream: Refining, ethylene/propylene, basic chemicals → Downstream: Synthetic materials/new chemical materials/fine chemicals → End-use: New energy, automotive, electronics, appliances, textiles & high-end equipment.',
        s1_industry_compete: lang === 'zh' ? '<span class="font-bold">竞争格局</span><br>行业整体呈现供给端同质化竞争日趋激烈、企业盈利分化明显。竞争焦点已从传统规模扩张转向材料端与精细化领域的技术壁垒打造、园区化集聚与产业链一体化协同效率提升，叠加安全环保政策收紧，合规运营能力与精细化管理成为核心竞争要素。' : '<span class="font-bold">Competitive Landscape</span><br>The industry faces intensifying homogeneous competition on the supply side with clear profit divergence. Competition has shifted from traditional scale expansion to building technological barriers in materials and fine chemicals, park-based clustering, integrated supply chain efficiency, plus tightening safety/environmental regulations making compliance and lean management core competitive factors.',

        // ============================================================
        // 三、绿色信贷营销指引
        // ============================================================
        section2Title: lang === 'zh' ? '二、绿色信贷营销指引' : 'II. Green Credit Marketing Guidelines',
        s2_guideline_title: lang === 'zh' ? '（一）绿色信贷指引提示' : '(A) Green Credit Guidelines',

        greenClassCards: lang === 'zh' ? [
            { level1: '2 节能环保产业', level2: '2.5 资源循环利用', level3: '2.5.2 危险废物处理处置' },
            { level1: '3 清洁能源产业', level2: '3.2 清洁能源设施建设和运营', level3: '3.2.7 废气回收利用' },
            { level1: '1 节能降碳产业', level2: '1.4 节能降碳改造', level3: '1.4.1 节能降碳改造和能效提升' }
        ] : [
            { level1: '2 Energy Conservation & Environmental Protection', level2: '2.5 Resource Recycling', level3: '2.5.2 Hazardous Waste Treatment' },
            { level1: '3 Clean Energy', level2: '3.2 Clean Energy Facility Construction & Operation', level3: '3.2.7 Waste Gas Recovery' },
            { level1: '1 Energy Conservation & Carbon Reduction', level2: '1.4 Energy-Saving & Carbon Reduction Upgrade', level3: '1.4.1 Energy Efficiency Improvement' }
        ],

        s2_guideline_basis: lang === 'zh' ? '企业主营包含危险废物经营、废气回收利用、热电联产及氢能相关，符合上述目录条款。项目资金拟用于危废处置设施扩建、废气回收系统及氢能示范项目。' : 'The enterprise\'s main operations include hazardous waste management, waste gas recovery, cogeneration, and hydrogen energy, meeting the above directory criteria. Project funds are intended for hazardous waste facility expansion, waste gas recovery systems, and hydrogen demonstration projects.',
        s2_guideline_suggestion: lang === 'zh' ? '总危废处置规模提升至XX万吨/年，废气回收率≥98%，氢能项目预计年减排CO₂约XX吨。技术方案符合《危险废物焚烧污染控制标准》及《氢能产业发展中长期规划》。' : 'Total hazardous waste treatment capacity increased to XX 10k tons/year, waste gas recovery rate ≥98%, hydrogen project estimated to reduce CO₂ by ~XX tons/year. Technical plan complies with Hazardous Waste Incineration Pollution Control Standards and Hydrogen Industry Development Medium/Long-Term Plan.',
        s2_guideline_proof: lang === 'zh' ? '危险废物经营许可证、环评批复、能源管理体系认证、碳核查报告、项目可行性研究报告。' : 'Hazardous waste operating permit, EIA approval, energy management system certification, carbon verification report, project feasibility study.',
        s2_guideline_usage: lang === 'zh' ? '危险废物处置设施扩建、废气回收系统建设、氢能示范项目配套流动资金、智能化节能技改、绿色供应链保理。' : 'Hazardous waste facility expansion, waste gas recovery system construction, hydrogen demo project working capital, smart energy-saving upgrades, green supply chain factoring.',

        // ============================================================
        // 四、绿色产品建议
        // ============================================================
        section3Title: lang === 'zh' ? '三、绿色产品建议' : 'III. Green Product Recommendations',
        s3_devNote: lang === 'zh' ?
            '\n        <strong>🧩 开发备注：</strong> 中行是固定给了几个金融产品，其他行需要根据行内特色金融产品，提供准入标准，为不同银行客户提供专属的绿色潜客【绿色产品建议】。\n    ' :
            '\n        <strong>🧩 Dev Note: </strong> BOC has predefined financial products; other banks should provide access criteria based on their unique financial products to offer tailored green prospect [Green Product Recommendations] for different banking clients.\n    ',
        s3_productTable: lang === 'zh' ?
            '\n        <thead><tr><th>产品名称</th><th>产品简介</th><th>产品要点</th></tr></thead>\n        <tbody>\n            <tr><td class="font-medium">碳排放权抵质押融资</td><td>客户以全国碳市场碳排放配额、国家核证自愿减排量等作为抵质押物申请融资。</td><td>1.以合规碳资产为核心抵质押物；2.盘活碳资产，降低融资成本。</td></tr>\n            <tr><td class="font-medium">转型项目贷款</td><td>面向有绿色低碳转型需求的工业企业，支持节能减排、环保设施、清洁能源等项目。</td><td>1.专属转型融资；2.配套温室气体减排核算、技术方案对接。</td></tr>\n            <tr><td class="font-medium">碳效挂钩贷</td><td>面向碳账户贴标为"深绿""浅绿"的优质低碳经营主体，发放流动资金贷款。</td><td>1.资金用于减碳脱碳生产经营；2.利率与碳账户等级挂钩。</td></tr>\n            <tr><td class="font-medium">绿色供应链保理</td><td>基于核心企业绿色采购，为上下游供应商提供应收账款融资。</td><td>1.依托绿色产业链；2.助力中小企业绿色转型。</td></tr>\n        </tbody>\n    ' :
            '\n        <thead><tr><th>Product Name</th><th>Description</th><th>Key Points</th></tr></thead>\n        <tbody>\n            <tr><td class="font-medium">Carbon Asset Pledge Financing</td><td>Clients use national carbon market allowances or CCERs as collateral for financing.</td><td>1. Compliant carbon assets as core collateral; 2. Monetize carbon assets, reduce financing costs.</td></tr>\n            <tr><td class="font-medium">Transition Project Loan</td><td>For industrial enterprises with green/low-carbon transition needs, supporting energy conservation, environmental facilities, and clean energy projects.</td><td>1. Dedicated transition financing; 2. GHG reduction accounting and technical solutions.</td></tr>\n            <tr><td class="font-medium">Carbon-Performance-Linked Loan</td><td>Working capital loans for low-carbon entities labeled "Dark Green" or "Light Green" in carbon accounts.</td><td>1. Funds for carbon reduction operations; 2. Interest rate linked to carbon account rating.</td></tr>\n            <tr><td class="font-medium">Green Supply Chain Factoring</td><td>Accounts receivable financing for upstream/downstream suppliers based on core enterprise green procurement.</td><td>1. Leverages green supply chains; 2. Supports SME green transition.</td></tr>\n        </tbody>\n    ',
        s3_note: lang === 'zh' ? '嘉化能源符合危废处置及废气回收等多项绿色目录，可组合申请上述产品享受财政贴息及优惠利率。' : 'Jiahua Energy qualifies under multiple green categories (hazardous waste treatment and waste gas recovery) and can apply for the above products with preferential interest rates and fiscal subsidies.',

        // ============================================================
        // 页脚
        // ============================================================
        pageFooter: lang === 'zh' ? '绿色业务营销报告 · 浙江嘉化能源化工股份有限公司 | 依据《绿色金融支持项目目录（2025版）》及石化化工行业政策编制' : 'Green Business Marketing Report · Zhejiang Jiahua Energy Chemical | Based on Green Finance Project Catalogue (2025) & Petrochemical Industry Policies'
    };

    // Also expose as REPORT_DATA for backward compatibility
    REPORT_DATA = data;
    return data;
}
