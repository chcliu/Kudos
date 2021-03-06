export function setCompliments(compliments) {
  return {
    type: "SET_COMPLIMENTS",
    compliments
  };
}

export function setSelectedGiphy(giphyURL) {
  return {
    type: "SET_SELECTED_GIPHY",
    selectedGiphy: giphyURL
  };
}

export function setSelectedCompliment(selectedCompliment) {
  return {
    type: "SET_SELECTED_COMPLIMENT",
    selectedCompliment
  };
}

export function setPhone(phoneNO) {
  return {
    type: "SET_PHONE",
    phoneNO
  };
}

export function setIsCalled(isCalled) {
  return {
    type: "SET_IS_CALLED",
    isCalled
  };
}

export function goHome() {
  return {
    type: "GO_HOME",
    isCalled: false
  };
}

export function setTime(schedule) {
  console.log("ACTION CREATOR", schedule);
  return {
    type: "SET_TIME",
    schedule
  };
}
