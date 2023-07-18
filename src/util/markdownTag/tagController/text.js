function strong({ node, children, ...props }) {
    return (
        <strong
            className="text-[#577cf1]"
            {...props}
        >
            {children}
        </strong>
    );
}

function p({ node, children, ...props }) {
    return (
        <div
            className="mx-5 mb-5 leading-8 md:text-[18px] text-[15px]"
            style={
                {
                    // marginBottom: "10px",
                }
            }
            {...props}
        >
            {children}
        </div>
    );
}

function em({ node, children, ...props }) {
    return (
        <em
            className="text-[#858585]"
            style={
                {
                    // marginBottom: "10px",
                }
            }
            {...props}
        >
            {children}
        </em>
    );
}

export { p, strong, em };
