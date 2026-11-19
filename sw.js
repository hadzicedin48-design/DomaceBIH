function loginWithGoogle() { 
  const provider = new firebase.auth.GoogleAuthProvider(); 
  auth.signInWithPopup(provider).then(result => { 
    const user = result.user; 
    const userData = { 
      uid: user.uid, 
      email: user.email, 
      name: user.displayName || user.email, 
      photo: user.photoURL || "", 
      city: "", 
      isSeller: false, 
      verified: false 
    };
    localStorage.setItem("domaceUser", JSON.stringify(userData));
    db.collection("users").doc(user.uid).set({ email: user.email, name: user.displayName || user.email, photo: user.photoURL || "", city: "" }, { merge: true }); 
    closeModal(); 
    renderProfile();
    showConfirm("✅", t("success"), () => {}); 
  }).catch(err => showConfirm("❌ " + t("error"), err.message, () => {})); 
}