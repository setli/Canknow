import Prototype from "../common/lib/prototype";

import * as Guid from "../common/lib/Guid.es6";
import * as ArrayLibs from "../common/lib/ArrayLibs.es6";
import * as ColorLibs from "../common/lib/ColorLibs.es6";
import * as DatetimeLibs from "../common/lib/DatetimeLibs.es6";
import * as MathLibs from "../common/lib/MathLibs.es6";
import * as ObjectLibs from "../common/lib/ObjectLibs.es6";
import * as CommonLibs from "../common/lib/CommonLibs.es6";

const libs = {
    ...Guid,
    ...ArrayLibs,
    ...ColorLibs,
    ...DatetimeLibs,
    ...MathLibs,
    ...ObjectLibs,
    ...CommonLibs
};
export default libs;