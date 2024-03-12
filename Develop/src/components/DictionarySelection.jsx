import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import dictionaryApi from './utils/API';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const dictionaryResults = (props) => {
    const [result, setResult] = useState([]);
    const [dictionaryApi, setDictionaryApi] = useState([]);

    const selectDictionaries = async (query) => {
        dictionaryApi.select(query)
            .then((res) => {
                setResult(res.data)
                setDictionaryApi('')
            })
            .catch((err) => console.log(err));

        useEffect(() => {
            selectDictionaries();
        }, []);

        const handleChange = (event) => {
            const {
                target: { value },
            } = event;
            setResult(
                // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
            );
        };

        return (
            <ul className="list-group">
                {props.result.map((results) => (
                    <li className='list-group-item' key={resuls.id}>
                        dictionary={result.title}
                    </li>
                ))}
            </ul>
        )
    };
}

// function getStyles(name, personName, theme) {
//     return {
//         fontWeight:
//             personName.indexOf(name) === -1
//                 ? theme.typography.fontWeightRegular
//                 : theme.typography.fontWeightMedium,
//     };
// }

function DictionarySelection() {
    const theme = useTheme();

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setResults(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                <Select
                    multiple
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>Select Dictionary</em>;
                        }

                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="">
                        <em>Dictionary Selection</em>
                    </MenuItem>
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

// export const dictionariesUrl = `${dictionaryUrl}/dictionaries`;
export default DictionarySelection;