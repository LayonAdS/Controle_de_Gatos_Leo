// importa react e o hook useState para controle de estado

import React, {useState} from 'react';

// importa os componentes nativos para a construção de interface
import{
    View,   // container de layout
    TextInput, // campo de entrada de texto
    Text,  // exibição de texto
    TouchbleOpscity,  // botão personalizado
    FlatList,  // lista de rolagem eficiente
    StyleSheet,  // estilização 
    Alert  // exibição de alertas
}from 'react-native';


// componente pricipal 
export default function HomeScreen(){
    // Estado para os campos de formualario
    const[descricao, setDescricao] = useState('');
    const[valor, setValor] = useState('');
    const[gastos, setGastos] = useState([]); // listas de gatos por isso usa o [] para criar tipo um array
    const[editandoId, setEditandoId] = useState(null); // id do item sendo editado

    // função para adicionar um novo gasto ou atualizar um existente
    const adicionarOuAtualizar = () =>{
        // validaçao campos vazios 
        if(!descricao || !valor){
            Alert.alert('Erro', 'Preencha todos os campos');
            return;
        }
    }


}