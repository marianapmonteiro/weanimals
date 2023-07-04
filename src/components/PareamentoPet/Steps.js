import dia from "../../Images/dia.jpg";
import tarde from "../../Images/tarde.jpg";
import noite from "../../Images/noite.jpg";
import relogio1 from "../../Images/relogio1.jpg";
import relogio2 from "../../Images/relogio2.jpg";
import relogio3 from "../../Images/relogio3.jpg";
import carinhoso from '../../Images/carinhoso.jpg'
import independente from '../../Images/independente.jpg'
import sociavel from '../../Images/sociavel.jpg'
import peludos from '../../Images/peludos.jpg'
import pelocurto from '../../Images/pelocurto.jpg'
import tantofazPelos from '../../Images/tantofazPelos.jpg'
import grandeporte from '../../Images/grandeporte.jpg'
import pequenoporte from '../../Images/pequenoporte.jpg'
import tantofazporte from '../../Images/tantofazporte.jpg'
import soltocasa from '../../Images/soltocasa.jpg'
import alojamento from '../../Images/alojamento.jpg'
import adaptarcasa from '../../Images/adaptarcasa.jpg'
import casagrande from '../../Images/casagrande.jpg'
import casapequena from '../../Images/casapequena.jpg'
import casamedia from '../../Images/casamedia.jpg'
import petsjuntos from '../../Images/mimielolo.jpg'
import petsseparados from '../../Images/petsozinho.jpg'
import naotenhopet from '../../Images/naotenhopet.jpg'


const steps = [
    {
        title: "Seus Hábitos são:",
        options: ["Matutinos", "Vespertinos", "Noturnos"],
        etiquetas: ['Hábitos matutinos', 'Hábitos vespertinos', 'Hábitos noturnos'],
        images: [dia, tarde, noite],
        value: 1,
    },
    {
        title: "Quanto tempo disponível você tem por dia?",
        options: ["Menos de 5 horas", "Mais de 5 horas", "Não tenho muito tempo"],
        etiquetas: ['Independente', 'Sociável', 'Independente'],
        images: [relogio1, relogio2, relogio3],
        value: 2,
    },
    {

        title: "Você prefere animais de grande ou pequeno porte?",
        options: ["Pequeno porte", "Grande porte", "Tanto faz"],
        etiquetas: ['Pequeno porte', 'Grande porte', 'Porte médio'],
        images: [pequenoporte, grandeporte, tantofazporte],
        value: 3,
    },
    {
        title: "Qual a característica que você mais gosta em um bichinho?",
        options: ["Independente", "Carinhoso", "Sociável"],
        etiquetas: ['Independente', 'Carinhoso', 'Sociável'],
        images: [independente, carinhoso, sociavel],
        value: 4,
    },
    {
        title: "Sobre pelagem: Qual você prefere?",
        options: ["Pelos curtos", "Peludos", "Tanto faz"],
        etiquetas: ['Pelos curtos', 'Peludo', 'Sem pelos'],
        images: [pelocurto, peludos, tantofazPelos],
        value: 5,
    },
    {
        title: "Você pretende deixar o seu animalzinho solto pela casa ou em um alojamento?",
        options: ["Em um espaço especial só para ele", "Solto pela casa", "Terei que adaptar minha casa para solta-lo"],
        etiquetas: ['Tem que ter um espaço somente para ele', 'Pode viver solto pela casa', 'Requer adaptação para viver solto pela casa'],
        images: [alojamento, soltocasa, adaptarcasa],
        value: 6,
    },
    {
        title: "Você tem mais pets em casa? Se sim, você pretende deixar eles juntos ao seu novo bichinho?",
        options: ["Não tenho pets", "Sim, e não ficariam juntos", "Sim, e pretendo deixa-los juntos"],
        etiquetas: ['Deve viver sem outros pets', 'Territorialista', 'Sociável'],
        images: [naotenhopet, petsseparados, petsjuntos],
        value: 7,
    },
    {
        title: "Qual o tamanho do seu lar?",
        options: ["Grande, com quintal", "Médio", "Pequeno"],
        etiquetas: ['Grande porte', 'Porte médio', 'Pequeno porte'],
        images: [casagrande, casamedia, casapequena],
        value: 8,
    },

];

export default steps;