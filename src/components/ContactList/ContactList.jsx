import { Button, Text } from "./ContactList.styled";
import PropTypes from 'prop-types';

export const ContactList = ({filteredContacts, onDelete}) => {
    return (
        <ul>
            {filteredContacts.map(obj => (
                <li key={obj.id}>
                    <Text>{obj.name}: {obj.number}</Text>
                    <Button type="button" onClick = {()=> onDelete(obj.id)}>Delete</Button>
                </li>
            ))

            }
        </ul>
    )
}

ContactList.propTypes = {
    filteredContacts: PropTypes.array,
    onDelete: PropTypes.func
}