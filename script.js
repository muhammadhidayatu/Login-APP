function showRegister(e) {
    e.preventDefault();
    const container = document.getElementById('form-container');
    container.innerHTML = `
      <h2>Register</h2>
      <form action="register.php" method="POST">
        <div class="input-group">
          <label for="new-username">Username</label>
          <input type="text" id="new-username" name="new-username" placeholder="Choose username" required>
        </div>
        <div class="input-group">
          <label for="new-email">Email</label>
          <input type="email" id="new-email" name="new-email" placeholder="you@example.com" required>
        </div>
        <div class="input-group">
          <label for="new-password">Password</label>
          <input type="password" id="new-password" name="new-password" placeholder="Create password" required>
        </div>
        <button type="submit" class="submit-btn">Register</button>
        <div class="register-link">
          <p>Already have an account? <a href="#" onclick="location.reload()">Login</a></p>
        </div>
      </form>`;
  }