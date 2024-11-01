import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { SelectControl } = wp.components;
const {
	BlockControls,
	AlignmentToolbar,
} = wp.editor;
const { withSelect } = wp.data;

registerBlockType( 'user-blocks/user-meta', {

	title: __( 'User Meta' ),
	icon: 'admin-users',
	category: 'common',
	keywords: [
		__( 'User' ),
		__( 'Meta' ),
	],

    attributes: {
		usermeta: {
			type: 'string',
		},
		alignment: {
			type: 'string',
		},
	},

	edit: ( props ) => {

        return [
			props.isSelected && (
				<BlockControls>
					<AlignmentToolbar
						value={ props.attributes.alignment }
						onChange={ (newAlignment) => {props.setAttributes( {alignment: newAlignment} )}}
					/>
				</BlockControls>
			),
			<SelectControl
				value={ props.attributes.usermeta }
				onChange={ ( newUsermeta ) => { props.setAttributes( { usermeta: newUsermeta } ) } }
				options={ [
					{ value: null, label: 'Select usermeta', disabled: true },
					{ value: 'user_login', label: 'User Login' },
					{ value: 'user_nicename', label: 'Nice Name' },
					{ value: 'display_name', label: 'Display Name' },
					{ value: 'first_name', label: 'First Name' },
					{ value: 'last_name', label: 'Last Name' },
					{ value: 'user_email', label: 'Email' },
				] }
			/>,
		]
	},

	save: ( props ) => {
		// Server Side Rendering
	},
} );
