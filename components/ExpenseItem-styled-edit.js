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
    

     // validação para verificar valor numerico no campo valor
     if(isNaN(parseFloat(valor))){
        Alert.alert('Erro', 'Digite um valor numérico');
        return;
     }
     if(editandoId){
        const gastoAtualizados = gastos.map(item =>
        // atualiza gasto existente com base no Id
        item.id == editandoId ? {...item, descricao, valor: parseFloat(valor).toFixed(2)}: item);
        setGastos(gastoAtualizados); // atualiza a lista de gastos com o gasto editado
        setEditandoId(null); // limpa o estado de edição
     }else{
        // Criação de novo gasto com id único baseado no timestamp
        const novoGasto = {
            id: Date.now().toString(), // gera um id único usando o timestamp
            descricao, // descrição do gasto
            valor: parseFloat(valor).toFixed(2) // valor do gasto formatado para 2 casas decimais
        };
        setGastos([...gastos, novoGasto]); // adiciona o novo gasto à lista de gastos
        }
      
    }

}