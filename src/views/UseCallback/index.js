/**
 * @author Matheus Paice <matheus.ferreira@jbtec.com.br>
 * @description Modelo de utilização de useCallback
 */

import React, { useCallback } from 'react';

import PropTypes from 'prop-types';

const mostrarNomes = (primeiro, sobrenome) => `${primeiro} - ${sobrenome}`;

const ModeloUseCallback = props => {
    const chamarNome = () =>
        useCallback(() => {
            return mostrarNomes(props.primeiro, props.sobrenome);
        });

    return <h1> {chamarNome()} </h1>;
};

ModeloUseCallback.propTypes = {
    primeiro: PropTypes.string.isRequired,
    sobrenome: PropTypes.string.isRequired,
};

const Index = () => <ModeloUseCallback primeiro="Matheus" sobrenome="Paice" />;
export default Index;
