import React from 'react';
import {
  Container, Row, Col, FormGroup, Form, Button,
} from 'react-bootstrap';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import {
  BgContainer, Div, DivTasks, H4BoldPrimary, FormCustom, FromErrorMsg,
} from './styled';
import * as colors from '../../config/colors';
import axios from '../../services/axios';

export default function Task({ match, history }) {
  const id = get(match, 'params.id', '');
  const push = get(history, 'push');

  const [title, setTitle] = React.useState('');
  const [startTime, setStartTime] = React.useState('');
  const [finalTime, setFinalTime] = React.useState('');
  const [priority, setPriority] = React.useState(0);
  const [description, setDescription] = React.useState('');

  const [titleErrorMsg, setTitleErrorMsg] = React.useState('');
  const [startTimeErrorMsg, setStartTimeErrorMsg] = React.useState('');
  const [finalTimeErrorMsg, setFinalTimeErrorMsg] = React.useState('');
  const [titleErrorStyle, setTitleErrorStyle] = React.useState({});
  const [startTimeErrorStyle, setStartTimeErrorStyle] = React.useState({});
  const [finalTimeErrorStyle, setFinalTimeErrorStyle] = React.useState({});

  React.useEffect(() => {
    async function getTask() {
      try {
        const { data } = await axios.get(`/task/${id}`);

        setTitle(data.title);
        setPriority(data.priority);
        setDescription(data.description);

        const date1 = new Date(data.start_date);
        setStartTime(new Date(date1.getTime() - (date1.getTimezoneOffset() * 60000))
          .toISOString().slice(0, -5));
        const date2 = new Date(data.final_date);
        setFinalTime(new Date(date2.getTime() - (date2.getTimezoneOffset() * 60000))
          .toISOString().slice(0, -5));
      } catch (err) {
        console.log(err);
      }
    }

    if (id) getTask();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    setTitleErrorMsg('');
    setStartTimeErrorMsg('');
    setFinalTimeErrorMsg('');
    setTitleErrorStyle({});
    setStartTimeErrorStyle({});
    setFinalTimeErrorStyle({});

    let errors = false;

    if (title.length < 3 || title.length > 255) {
      errors = true;
      setTitleErrorMsg('É preciso que o título tenha ao menos 3 caracteres');
      setTitleErrorStyle({ border: `2px solid ${colors.alertColor}` });
    }

    if (!startTime.length) {
      errors = true;
      setStartTimeErrorMsg('É preciso incluir o horário inicial');
      setStartTimeErrorStyle({ border: `2px solid ${colors.alertColor}` });
    }

    if (!finalTime.length) {
      errors = true;
      setFinalTimeErrorMsg('É preciso incluir o horário final');
      setFinalTimeErrorStyle({ border: `2px solid ${colors.alertColor}` });
    }

    if (errors) return;

    const time1 = new Date(startTime);
    const time2 = new Date(finalTime);

    const resJson = {
      title,
      description,
      start_date: time1.toISOString(),
      final_date: time2.toISOString(),
      priority,
    };

    if (id) {
      try {
        await axios.put(`/task/${id}`, resJson);
        push('/');
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await axios.post('/task/', resJson);
        push('/');
      } catch (err) {
        console.log(err);
      }
    }
  }

  function handleDelete() {
    confirmAlert({
      message: `Tem certeza que deseja excluir a tarefa ${title}?`,
      buttons: [{
        label: 'Sim',
        onClick: async () => {
          try {
            await axios.delete(`/task/${id}`);
            push('/');
          } catch (err) {
            console.log(err);
          }
        },
      }, {
        label: 'Não',
      }],
    });
  }

  return (
    <BgContainer fluid>
      <Container>
        <Row>
          <Col>
            <Div>
              <H4BoldPrimary>
                {id ? 'Editar tarefa' : 'Nova tarefa'}
              </H4BoldPrimary>

              <DivTasks>
                <FormCustom onSubmit={handleSubmit}>
                  <FormGroup>
                    <Form.Label>
                      Título
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={title}
                      placeholder="Adicionar título"
                      onChange={(e) => setTitle(e.target.value)}
                      style={titleErrorStyle}
                    />
                    <FromErrorMsg>{titleErrorMsg}</FromErrorMsg>
                  </FormGroup>

                  <FormGroup>
                    <Form.Row>
                      <Col>
                        <FormGroup>
                          <Form.Label>
                            Horário de início
                          </Form.Label>
                          <Form.Control
                            type="datetime-local"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            style={startTimeErrorStyle}
                          />
                          <FromErrorMsg>{startTimeErrorMsg}</FromErrorMsg>
                        </FormGroup>
                      </Col>

                      <Col>
                        <FormGroup>
                          <Form.Label>
                            Horário de término
                          </Form.Label>
                          <Form.Control
                            type="datetime-local"
                            value={finalTime}
                            onChange={(e) => setFinalTime(e.target.value)}
                            style={finalTimeErrorStyle}
                          />
                          <FromErrorMsg>{finalTimeErrorMsg}</FromErrorMsg>
                        </FormGroup>
                      </Col>
                    </Form.Row>
                  </FormGroup>

                  <FormGroup>
                    <Form.Label>
                      Prioridade
                    </Form.Label>
                    <Form.Control
                      as="select"
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                    >
                      <option value={0}>Baixa</option>
                      <option value={1}>Média</option>
                      <option value={2}>Alta</option>
                    </Form.Control>
                  </FormGroup>

                  <FormGroup>
                    <Form.Label>
                      Descrição
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      value={description}
                      placeholder="Adicionar descrição"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    {id ? (
                      <Form.Row>
                        <Col className="d-flex justify-content-end">
                          <Button variant="link-primary-danger-custom" onClick={handleDelete}>
                            Excluir tarefa
                          </Button>
                          <Button variant="primary-custom" type="submit" className="ml-1">
                            Salvar alterações
                          </Button>
                        </Col>
                      </Form.Row>
                    ) : (
                      <Button variant="primary-custom" style={{ width: '100%' }} type="submit">
                        Cadastrar nova tarefa
                      </Button>
                    )}
                  </FormGroup>
                </FormCustom>
              </DivTasks>
            </Div>
          </Col>
        </Row>
      </Container>
    </BgContainer>
  );
}

Task.propTypes = {
  match: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};
