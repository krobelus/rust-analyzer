(function() {var type_impls = {
"hir_ty":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InEnvironment%3CG%3E\" class=\"impl\"><a href=\"#impl-InEnvironment%3CG%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G&gt; InEnvironment&lt;G&gt;<span class=\"where fmt-newline\">where\n    G: HasInterner,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(\n    environment: &amp;Environment&lt;&lt;G as HasInterner&gt;::Interner&gt;,\n    goal: G\n) -&gt; InEnvironment&lt;G&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new environment/goal pair.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">map</a>&lt;OP, H&gt;(self, op: OP) -&gt; InEnvironment&lt;H&gt;<span class=\"where fmt-newline\">where\n    OP: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(G) -&gt; H,\n    H: HasInterner&lt;Interner = &lt;G as HasInterner&gt;::Interner&gt;,</span></h4></section></summary><div class=\"docblock\"><p>Maps the goal without touching the environment.</p>\n</div></details></div></details>",0,"hir_ty::InEnvironment"],["<section id=\"impl-StructuralEq-for-InEnvironment%3CG%3E\" class=\"impl\"><a href=\"#impl-StructuralEq-for-InEnvironment%3CG%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for InEnvironment&lt;G&gt;<span class=\"where fmt-newline\">where\n    G: HasInterner,</span></h3></section>","StructuralEq","hir_ty::InEnvironment"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-InEnvironment%3CG%3E\" class=\"impl\"><a href=\"#impl-Clone-for-InEnvironment%3CG%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for InEnvironment&lt;G&gt;<span class=\"where fmt-newline\">where\n    G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + HasInterner,\n    &lt;G as HasInterner&gt;::Interner: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; InEnvironment&lt;G&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hir_ty::InEnvironment"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HasInterner-for-InEnvironment%3CG%3E\" class=\"impl\"><a href=\"#impl-HasInterner-for-InEnvironment%3CG%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G&gt; HasInterner for InEnvironment&lt;G&gt;<span class=\"where fmt-newline\">where\n    G: HasInterner,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Interner\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Interner\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Interner</a> = &lt;G as HasInterner&gt;::Interner</h4></section></summary><div class='docblock'>The interner associated with the type.</div></details></div></details>","HasInterner","hir_ty::InEnvironment"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-InEnvironment%3CG%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-InEnvironment%3CG%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for InEnvironment&lt;G&gt;<span class=\"where fmt-newline\">where\n    G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + HasInterner,\n    &lt;G as HasInterner&gt;::Interner: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;InEnvironment&lt;G&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","hir_ty::InEnvironment"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-InEnvironment%3CG%3E\" class=\"impl\"><a href=\"#impl-Hash-for-InEnvironment%3CG%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for InEnvironment&lt;G&gt;<span class=\"where fmt-newline\">where\n    G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + HasInterner,\n    &lt;G as HasInterner&gt;::Interner: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __H</a>)<span class=\"where fmt-newline\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</span></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#242-244\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut H</a>)<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","hir_ty::InEnvironment"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-InEnvironment%3CG%3E\" class=\"impl\"><a href=\"#impl-Debug-for-InEnvironment%3CG%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for InEnvironment&lt;G&gt;<span class=\"where fmt-newline\">where\n    G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + HasInterner,\n    &lt;G as HasInterner&gt;::Interner: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hir_ty::InEnvironment"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeFoldable%3C_I%3E-for-InEnvironment%3CG%3E\" class=\"impl\"><a href=\"#impl-TypeFoldable%3C_I%3E-for-InEnvironment%3CG%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G, _I&gt; TypeFoldable&lt;_I&gt; for InEnvironment&lt;G&gt;<span class=\"where fmt-newline\">where\n    G: HasInterner&lt;Interner = _I&gt; + HasInterner + TypeFoldable&lt;_I&gt;,\n    _I: Interner,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_fold_with\" class=\"method trait-impl\"><a href=\"#method.try_fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">try_fold_with</a>&lt;E&gt;(\n    self,\n    folder: &amp;mut dyn FallibleTypeFolder&lt;_I, Error = E&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;InEnvironment&lt;G&gt;, E&gt;</h4></section></summary><div class='docblock'>Apply the given folder <code>folder</code> to <code>self</code>; <code>binders</code> is the\nnumber of binders that are in scope when beginning the\nfolder. Typically <code>binders</code> starts as 0, but is adjusted when\nwe encounter <code>Binders&lt;T&gt;</code> in the IR or other similar\nconstructs.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fold_with\" class=\"method trait-impl\"><a href=\"#method.fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fold_with</a>(\n    self,\n    folder: &amp;mut dyn TypeFolder&lt;I, Error = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>\n) -&gt; Self</h4></section></summary><div class='docblock'>A convenient alternative to <code>try_fold_with</code> for use with infallible\nfolders. Do not override this method, to ensure coherence with\n<code>try_fold_with</code>.</div></details></div></details>","TypeFoldable<_I>","hir_ty::InEnvironment"],["<section id=\"impl-Eq-for-InEnvironment%3CG%3E\" class=\"impl\"><a href=\"#impl-Eq-for-InEnvironment%3CG%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for InEnvironment&lt;G&gt;<span class=\"where fmt-newline\">where\n    G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + HasInterner,\n    &lt;G as HasInterner&gt;::Interner: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</span></h3></section>","Eq","hir_ty::InEnvironment"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CastTo%3CInEnvironment%3CU%3E%3E-for-InEnvironment%3CT%3E\" class=\"impl\"><a href=\"#impl-CastTo%3CInEnvironment%3CU%3E%3E-for-InEnvironment%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U, I&gt; CastTo&lt;InEnvironment&lt;U&gt;&gt; for InEnvironment&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: HasInterner&lt;Interner = I&gt; + CastTo&lt;U&gt;,\n    U: HasInterner&lt;Interner = I&gt;,\n    I: Interner,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cast_to\" class=\"method trait-impl\"><a href=\"#method.cast_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">cast_to</a>(self, interner: &lt;U as HasInterner&gt;::Interner) -&gt; InEnvironment&lt;U&gt;</h4></section></summary><div class='docblock'>Cast a value to type <code>T</code>.</div></details></div></details>","CastTo<InEnvironment<U>>","hir_ty::InEnvironment"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Zip%3CI%3E-for-InEnvironment%3CT%3E\" class=\"impl\"><a href=\"#impl-Zip%3CI%3E-for-InEnvironment%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; Zip&lt;I&gt; for InEnvironment&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: HasInterner&lt;Interner = I&gt; + Zip&lt;I&gt;,\n    I: Interner,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.zip_with\" class=\"method trait-impl\"><a href=\"#method.zip_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">zip_with</a>&lt;Z&gt;(\n    zipper: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut Z</a>,\n    variance: Variance,\n    a: &amp;InEnvironment&lt;T&gt;,\n    b: &amp;InEnvironment&lt;T&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, NoSolution&gt;<span class=\"where fmt-newline\">where\n    Z: Zipper&lt;I&gt;,</span></h4></section></summary><div class='docblock'>Uses the zipper to walk through two values, ensuring that they match.</div></details></div></details>","Zip<I>","hir_ty::InEnvironment"],["<section id=\"impl-Copy-for-InEnvironment%3CG%3E\" class=\"impl\"><a href=\"#impl-Copy-for-InEnvironment%3CG%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for InEnvironment&lt;G&gt;<span class=\"where fmt-newline\">where\n    G: HasInterner&lt;Interner = I&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,\n    I: Interner,\n    &lt;I as Interner&gt;::InternedProgramClauses: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</span></h3></section>","Copy","hir_ty::InEnvironment"],["<section id=\"impl-StructuralPartialEq-for-InEnvironment%3CG%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-InEnvironment%3CG%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for InEnvironment&lt;G&gt;<span class=\"where fmt-newline\">where\n    G: HasInterner,</span></h3></section>","StructuralPartialEq","hir_ty::InEnvironment"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeVisitable%3C_I%3E-for-InEnvironment%3CG%3E\" class=\"impl\"><a href=\"#impl-TypeVisitable%3C_I%3E-for-InEnvironment%3CG%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G, _I&gt; TypeVisitable&lt;_I&gt; for InEnvironment&lt;G&gt;<span class=\"where fmt-newline\">where\n    G: HasInterner&lt;Interner = _I&gt; + HasInterner + TypeVisitable&lt;_I&gt;,\n    _I: Interner,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.visit_with\" class=\"method trait-impl\"><a href=\"#method.visit_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">visit_with</a>&lt;B&gt;(\n    &amp;self,\n    visitor: &amp;mut dyn TypeVisitor&lt;_I, BreakTy = B&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/control_flow/enum.ControlFlow.html\" title=\"enum core::ops::control_flow::ControlFlow\">ControlFlow</a>&lt;B&gt;</h4></section></summary><div class='docblock'>Apply the given visitor <code>visitor</code> to <code>self</code>; <code>binders</code> is the\nnumber of binders that are in scope when beginning the\nvisitor. Typically <code>binders</code> starts as 0, but is adjusted when\nwe encounter <code>Binders&lt;T&gt;</code> in the IR or other similar\nconstructs.</div></details></div></details>","TypeVisitable<_I>","hir_ty::InEnvironment"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()