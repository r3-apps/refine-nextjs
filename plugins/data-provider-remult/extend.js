const base = {
    _app: {
        import: [`import { entities } from "src/shared";`,`import { remultDataProvider } from "src/providers/dataProvider";`],
        refineProps: ["dataProvider={remultDataProvider(entities)}"],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
