<script>
	export let label = "Default Label";
	export let outerDivStyle = "";
	export let textStyle = "";
</script>

<div style={outerDivStyle} class="collapsible">
	<input type="checkbox" id={label}>
	<label for={label} style={textStyle}>{label}</label>
	<div class="item-container collapsible-text"><slot /></div>
</div>

<style>
	.item-container {
		margin-top: 0px;
	}

	.collapsible input {
		display: none;
	}

	.collapsible label {
		font-weight: 600;
		font-size: 17px;
		color: #1c1c6b;
		cursor: pointer;
		padding: 15px;
		position: relative;
		border-top: 6px solid transparent;
		border-bottom: 6px solid transparent;
		border-left: 6px solid #000;
	}

	.collapsible label::after {
		content: "";
		position: absolute;
		right: 15px;
		top: 15px;
		width: 0;
		height: 0;
		border-top: 6px solid transparent;
		border-bottom: 6px solid transparent;
		border-left: 6px solid #000;
		transition: transform 0.2s ease-in-out;
	}

	.collapsible input:checked ~ label::after {
		transform: rotate(90deg);
	}

	.collapsible-text {
		max-height: 0px;
		overflow: hidden;
		line-height: 1.4;
		position: relative;
		top: -100%;
		opacity: 0.5;
		transition: all 0.3s ease;
	}

	.collapsible input:checked ~ .collapsible-text {
		max-height: max-content;
		overflow: auto;
		padding-bottom: 25px;
		opacity: 1;
		top: 1;
	}
</style>
