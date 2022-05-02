import Navigator from "../navigator";

function Header() {
  return (
    <div style={{ width: "100%", maxHeight: 100 }}>
      <Navigator
        listItem={[
          { title: "Linkedin" },
          { title: "Github" },
          { title: "Email" },
        ]}
      />
    </div>
  );
}

export default Header;
