var OptionGroup = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.options.map(function(option) {
                    return (
                        <InputOption value={option.value} key={option.value}>
                            {option.label}
                        </InputOption>
                    );
                })}

                <OtherOption/>
            </div>
        );
    }
});
