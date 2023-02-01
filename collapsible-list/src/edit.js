/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { 
	PanelBody,
	RangeControl,
} from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	InspectorControls,
	InnerBlocks, 
	useBlockProps,
} from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';

import { __ } from '@wordpress/i18n';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { 
	attributes: { listItemsToShow }, 
	setAttributes, 
	clientId } ) 
{
	const blockProps = useBlockProps();
	
    const { min, max } = useSelect( 
		select => 
		{
			const theInnerBlocks = select('core/block-editor').getBlock(clientId).innerBlocks;
			const listBlock = theInnerBlocks.find( block => block.name == 'core/list' );

			if ( ! listBlock )
				return { min: 0, max: 0 };

			const max = listBlock.innerBlocks.length;

			return { max,
				min: Math.min(1, max) }; 
		} );

	const MY_TEMPLATE = [
		[ 'core/list' ],
		[ 'core/buttons', [], [
			[
				'core/button',
				{ text: 'Expand', className: 'clist-expand' }
			],
			[
				'core/button',
				{ text: 'Collapse', className: 'clist-collapse' }
			]]]];

	return (
		<div { ...blockProps }>
			{
				<InspectorControls>
					<PanelBody>
						<RangeControl
							__nextHasNoMarginBottom
							label = { __( 'Items to show' ) }
							value = { listItemsToShow }
							onChange = { (value) => setAttributes( { listItemsToShow: value } ) }
							min = { min }
							max = { max }
						/>
					</PanelBody>
				</InspectorControls>
			}
			<InnerBlocks
				template = { MY_TEMPLATE }
				templateLock = "all" /> 
		</div>
	);
}