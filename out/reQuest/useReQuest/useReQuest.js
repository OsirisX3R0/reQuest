"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const defaultProps = {
    returnJson: true,
    runInitial: true
};
const useReQuest = (url, fetchOpts = {}, opts = defaultProps) => {
    const [data, setData] = react_1.default.useState(null);
    const [loading, setLoading] = react_1.default.useState(false);
    const [error, setError] = react_1.default.useState(null);
    const { returnJson, runInitial } = opts;
    react_1.default.useEffect(() => {
        if (runInitial)
            getData();
    }, []);
    const getData = () => {
        setLoading(true);
        fetch(url, fetchOpts)
            .then(res => returnJson ? res.json() : res)
            .then(res => {
            setError(null);
            setData(res);
        })
            .catch(err => {
            setData(null);
            setError(err);
        })
            .finally(() => setLoading(false));
    };
    return [data, loading, error, getData];
};
exports.default = useReQuest;
//# sourceMappingURL=useReQuest.js.map