import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { COLORS, Loading } from '../../../styles';
import Err from '../Error';
import { Action, EditForm, Fields, Field, Label, Input, Actions } from './styles'

const SERVER_URL = 'http://localhost:3008'; // from env variable ideally

export default function EditPlayer({ close, player, save }) {
    const [form, setForm] = useState({
        name: player.name,
        image: player.image
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState(null);
    const [loading, setLoading] = useState(false);

    function handleFormChange(e) {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })
    }

    useEffect(() => {
        if (formSubmitted) {
            validate();
        }
    }, [form.name, form.image, formSubmitted])

    function submitForm(e) {
        e.preventDefault();
        setFormSubmitted(true);
        let errors = validate();
        
        if (!errors) {
            setLoading(true);
            _submitForm();
        } 
    }

    async function _submitForm() {
        try {
            await axios.patch(SERVER_URL + `/players/${player.id}`, form, {
                headers: {
                  "Content-Type": "application/json"  
                }
            })
            save(form);
        } catch(err) {
            // in reality we would need to check error code, could be 400 which requires user action
            setFormErrors({
                global: "Could not save player"
            })
        }
    }

    /* in reality we would use a validation library such as yup or a more sophisticated method */
    function validate() {
        let formErrors = {
            name: null,
            image: null,
        }

        if (!form.name) {
            formErrors.name = 'Name must be provided';
        } else if (!form.image) { 
            formErrors.image = "Image must be provided";
        }

        if (formErrors.name || formErrors.image) {
            setFormErrors(formErrors);
            return formErrors;
        } else {
            setFormErrors(null);
            return null;
        }


    }

    return (
        <EditForm onSubmit={submitForm}>
            {loading && <Loading>Loading...</Loading>}
            {!loading && <>
                <Fields>
                    <Field>
                        <Label htmlFor="name">Player name</Label>
                        <Input id="name" name="name" value={form.name} placeholder="enter name.." onChange={handleFormChange}></Input>
                        {formSubmitted && formErrors?.name && <Err small={true}>{formErrors.name}</Err>}
                    </Field>
                    <Field>
                        <Label htmlFor="image">Player image</Label>
                        <Input id="image" name="image" value={form.image} placeholder="enter image.." onChange={handleFormChange}></Input>
                        {formSubmitted && formErrors?.image && <Err small={true}>{formErrors.image}</Err>}
                    </Field>
                </Fields>
                <Actions>
                    <Action color={COLORS.DANGER_DARK} onClick={close}>Cancel</Action>
                    <Action type="submit" color={COLORS.PRIMARY}>Save</Action>
                </Actions>
            </>}
        </EditForm>
    )
}
