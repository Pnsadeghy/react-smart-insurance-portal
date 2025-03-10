import "./base.spinner.css"
import {memo} from "react";

interface componentProps {
    className?: string;
}

const BaseSpinner = memo(function BaseSpinner({className}: Readonly<componentProps>) {
    return (<div className={'flex items-center justify-center ' + className} ><div className="spinner"></div></div>)
});

export default BaseSpinner;