declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"why-open-source-matters.md": {
	id: "why-open-source-matters.md";
  slug: "why-open-source-matters";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"events": {
"fossla-inaugural-meetup.md": {
	id: "fossla-inaugural-meetup.md";
  slug: "fossla-inaugural-meetup";
  body: string;
  collection: "events";
  data: InferEntrySchema<"events">
} & { render(): Render[".md"] };
"git-github-workshop.md": {
	id: "git-github-workshop.md";
  slug: "git-github-workshop";
  body: string;
  collection: "events";
  data: InferEntrySchema<"events">
} & { render(): Render[".md"] };
"linux-install-fest.md": {
	id: "linux-install-fest.md";
  slug: "linux-install-fest";
  body: string;
  collection: "events";
  data: InferEntrySchema<"events">
} & { render(): Render[".md"] };
"open-source-philosophy-talk.md": {
	id: "open-source-philosophy-talk.md";
  slug: "open-source-philosophy-talk";
  body: string;
  collection: "events";
  data: InferEntrySchema<"events">
} & { render(): Render[".md"] };
};
"pages": {
"about.md": {
	id: "about.md";
  slug: "about";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
};
"projects": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">;
  render(): Render[".md"];
}>;
"resources": {
"docker.md": {
	id: "docker.md";
  slug: "docker";
  body: string;
  collection: "resources";
  data: InferEntrySchema<"resources">
} & { render(): Render[".md"] };
"fossla-handbook.md": {
	id: "fossla-handbook.md";
  slug: "fossla-handbook";
  body: string;
  collection: "resources";
  data: InferEntrySchema<"resources">
} & { render(): Render[".md"] };
"freecodecamp.md": {
	id: "freecodecamp.md";
  slug: "freecodecamp";
  body: string;
  collection: "resources";
  data: InferEntrySchema<"resources">
} & { render(): Render[".md"] };
"git-documentation.md": {
	id: "git-documentation.md";
  slug: "git-documentation";
  body: string;
  collection: "resources";
  data: InferEntrySchema<"resources">
} & { render(): Render[".md"] };
"linux-foundation-training.md": {
	id: "linux-foundation-training.md";
  slug: "linux-foundation-training";
  body: string;
  collection: "resources";
  data: InferEntrySchema<"resources">
} & { render(): Render[".md"] };
"linux-journey.md": {
	id: "linux-journey.md";
  slug: "linux-journey";
  body: string;
  collection: "resources";
  data: InferEntrySchema<"resources">
} & { render(): Render[".md"] };
"mdn-web-docs.md": {
	id: "mdn-web-docs.md";
  slug: "mdn-web-docs";
  body: string;
  collection: "resources";
  data: InferEntrySchema<"resources">
} & { render(): Render[".md"] };
"open-source-guide.md": {
	id: "open-source-guide.md";
  slug: "open-source-guide";
  body: string;
  collection: "resources";
  data: InferEntrySchema<"resources">
} & { render(): Render[".md"] };
"postgresql.md": {
	id: "postgresql.md";
  slug: "postgresql";
  body: string;
  collection: "resources";
  data: InferEntrySchema<"resources">
} & { render(): Render[".md"] };
"project-templates.md": {
	id: "project-templates.md";
  slug: "project-templates";
  body: string;
  collection: "resources";
  data: InferEntrySchema<"resources">
} & { render(): Render[".md"] };
"python.md": {
	id: "python.md";
  slug: "python";
  body: string;
  collection: "resources";
  data: InferEntrySchema<"resources">
} & { render(): Render[".md"] };
"react.md": {
	id: "react.md";
  slug: "react";
  body: string;
  collection: "resources";
  data: InferEntrySchema<"resources">
} & { render(): Render[".md"] };
"ubuntu.md": {
	id: "ubuntu.md";
  slug: "ubuntu";
  body: string;
  collection: "resources";
  data: InferEntrySchema<"resources">
} & { render(): Render[".md"] };
"vs-code.md": {
	id: "vs-code.md";
  slug: "vs-code";
  body: string;
  collection: "resources";
  data: InferEntrySchema<"resources">
} & { render(): Render[".md"] };
"workshop-materials.md": {
	id: "workshop-materials.md";
  slug: "workshop-materials";
  body: string;
  collection: "resources";
  data: InferEntrySchema<"resources">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"team": {
"aayan-mateen": {
	id: "aayan-mateen";
  collection: "team";
  data: InferEntrySchema<"team">
};
"jigmat-norpal": {
	id: "jigmat-norpal";
  collection: "team";
  data: InferEntrySchema<"team">
};
"munawar-ayub": {
	id: "munawar-ayub";
  collection: "team";
  data: InferEntrySchema<"team">
};
"phuntsog-wangdus": {
	id: "phuntsog-wangdus";
  collection: "team";
  data: InferEntrySchema<"team">
};
"sahil-ahmad": {
	id: "sahil-ahmad";
  collection: "team";
  data: InferEntrySchema<"team">
};
"stanzin-druksel": {
	id: "stanzin-druksel";
  collection: "team";
  data: InferEntrySchema<"team">
};
"stanzin-pasang": {
	id: "stanzin-pasang";
  collection: "team";
  data: InferEntrySchema<"team">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
