import React, { useEffect, useState } from 'react'
import { Button, Modal, Form, Input, Divider } from 'semantic-ui-react'
import { addSubsection, addEntryToSubsection } from '../../hooks/menuItems'

import './Modal.css'

const modalConfig = {
    subsection: {
        header: 'Add a Subsection',
        inputs: ['Add a subsection'],
        submit: addSubsection
    },
    entry: {
        header: 'Add An Entry to a Subsection',
        inputs: ['Subsection', 'Entry Title', 'Entry Due Date', 'Color'],
        submit: addEntryToSubsection
    }
}

function ModalComponent({ state, setState, type }) {

    const submitForm = () => {
        const inputValues = []
        let inputsDiv = Array.from(document.querySelectorAll('.input'))
        inputsDiv.forEach(div => {
            let input = div.children[0].value
            inputValues.push(input)
        })
        modalConfig[type].submit(inputValues)
        setState(false)
    }

    return (
        <Modal
            onClose={() => setState(false)}
            onOpen={() => setState(true)}
            open={state}
            size="tiny"
        >
            <Modal.Header>{modalConfig[type].header}</Modal.Header>
            <Modal.Content>
                <Form id="modal__form" onSubmit={() => submitForm()}>
                    {modalConfig[type].inputs.map(input =>
                        <Form.Field >
                            <Input focus placeholder={input} ></Input>
                        </Form.Field>
                    )}
                    <Modal.Actions>
                        <Button color='red' onClick={() => setState(false)}>
                            Cancel
        </Button>
                        <Button
                            content="Proceed"
                            labelPosition='right'
                            icon='checkmark'
                            positive
                            type='submit'
                        />
                    </Modal.Actions>
                </Form>
            </Modal.Content>

        </Modal>
    )
}

export default ModalComponent;

