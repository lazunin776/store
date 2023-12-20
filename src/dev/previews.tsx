import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Product from "../pages/product/product";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Product">
                <Product/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;