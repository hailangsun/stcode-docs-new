import{ax as s,q as a,p as i,aS as n}from"./chunks/framework.DtYAO0R4.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"houduan/mybatis-plus.md","filePath":"houduan/mybatis-plus.md","lastUpdated":null}'),e={name:"houduan/mybatis-plus.md"},t=n(`<h2 id="条件添加or查询" tabindex="-1">条件添加or查询 <a class="header-anchor" href="#条件添加or查询" aria-label="Permalink to &quot;条件添加or查询&quot;">​</a></h2><blockquote><p>条件添加or查询</p></blockquote><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">queryWrapper</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">and</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    wrapper </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">-&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> wrapper</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">eq</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">fbr</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> AuthUtil</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getCurrentUserId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">())</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">                 .</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">or</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">                 .</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">exists</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">select 1 from bt_hy_ry b where b.hytzid = hytzid and b.userid = </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">AuthUtil</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getCurrentUserId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="groupby查询" tabindex="-1">groupBy查询 <a class="header-anchor" href="#groupby查询" aria-label="Permalink to &quot;groupBy查询&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span> QueryWrapper&lt;FxyjJcmxEntity&gt; queryWrapperOne = new QueryWrapper&lt;&gt;();</span></span>
<span class="line"><span> queryWrapperOne.select(&quot;count(fxdj) countfxdj,fxdj&quot;);</span></span>
<span class="line"><span> queryWrapperOne.eq(&quot;fxyjid&quot;, fxyjEntity.getId());</span></span>
<span class="line"><span> queryWrapperOne.groupBy(&quot;fxdj&quot;);</span></span>
<span class="line"><span> List&lt;FxyjJcmxEntity&gt; fxyjJcmxEntities1 = fxyjJcmxMapper.selectList(queryWrapperOne);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,5),p=[t];function l(r,h,k,d,o,u){return i(),a("div",null,p)}const g=s(e,[["render",l]]);export{y as __pageData,g as default};
