import React from "react";

interface componentProps {
    loading?: boolean;
    children: React.ReactNode;
}

// #TODO add style for loading

export default function BaseButtonSubmit({loading, children}: componentProps) {
    return (<button type="submit" disabled={loading} className="button" >{children}</button>)
}