var Demo = React.createClass({
	render: function () {

		var inputOptions = [
			{value: 'newspaper', label: 'Newspaper'},
			{value: 'radio', label: 'Radio'},
			{value: 'tv', label: 'Television'},
			{value: 'search', label: 'Search Engine'},
			{value: 'social', label: 'Social Media'}
		];

		return (

			<div className="container">
				<h1>React.js Demo</h1>

				<form>
					<p className="h3">How did you hear about us?</p>

					<OptionGroup options={inputOptions} />

					<p><input type="submit"/></p>
				</form>
			</div>

		);
	}
});
