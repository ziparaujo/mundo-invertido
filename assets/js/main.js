import { subscribeToHellfireClub } from "./firebase/hellfire-clube.js";

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');

btnSubscribe.addEventListener('click', async () => {
  const subscription = {
    name: txtName.value,
    email: txtEmail.value,
    level: txtLevel.value,
    character: txtCharacter.value
  }

  const validateInput = txtName.value.length && txtEmail.value.length && txtLevel.value.length && txtCharacter.value.length;
  if (validateInput) {
    const subscriptionId = await subscribeToHellfireClub(subscription);
    console.log(`Inscrito com sucesso: ${subscriptionId}`);
  } else console.log('Preencha todos os campos.')
})
