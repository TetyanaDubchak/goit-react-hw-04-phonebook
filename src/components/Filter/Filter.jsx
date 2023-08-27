import { Input, Text } from "./Filter.styled";
import PropTypes from 'prop-types';

export const Filter = ({ onChangeFilter}) => {
    return (
        <>
            <Text>Find contacts by name</Text>
            <Input type="text"  onChange={evt=> onChangeFilter(evt.target.value)} />
        </>
    )
}

Filter.propTypes = {
    onChangeFilter: PropTypes.func,
}