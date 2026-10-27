import { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    "Dashboard",
    "Employees",
    "Attendance",
    "Shifts",
    "Leaves",
    "Documents",
    "Performance",
    "Payroll",
    "Analytics",
    "Notifications",
  ];

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>WorkSphere</h2>
        <p className="subtitle">HRMS</p>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <header>
          <div>
            <h1>{active}</h1>
            <p>WorkSphere Human Resource Management System</p>
          </div>

          <div className="profile">
            <span>Admin</span>
          </div>
        </header>

        {active === "Dashboard" ? (
          <>
            <section className="cards">
              <div className="card">
                <h3>Total Employees</h3>
                <strong>0</strong>
              </div>

              <div className="card">
                <h3>Present Today</h3>
                <strong>0</strong>
              </div>

              <div className="card">
                <h3>Employees on Leave</h3>
                <strong>0</strong>
              </div>

              <div className="card">
                <h3>Pending Reviews</h3>
                <strong>0</strong>
              </div>
            </section>

            <section className="welcome">
              <h2>Welcome to WorkSphere</h2>
              <p>
                Manage employees, attendance, shifts, leave, documents,
                performance, payroll, analytics and notifications from one
                dashboard.
              </p>
            </section>
          </>
        ) : (
          <section className="module">
            <h2>{active}</h2>
            <p>{active} management module is ready.</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;