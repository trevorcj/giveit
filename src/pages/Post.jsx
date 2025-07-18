import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Form from "../components/Form";

function Post() {
  return (
    <>
      <div className="hero">
        <NavBar
          logo="logo-light-b.svg"
          btnClass="cta-btn-main btn"
          btnText="View Listings"
        />
        <main>
          <h1>Add a Listing</h1>
          <p style={{ margin: "20px 0 60px 0" }}>
            Got something to give? Share it freely <br /> — no account needed.
          </p>
        </main>
      </div>
      <Form />
      <div className="safety-tips">
        <p>
          <strong>Safety Tips:</strong> We want everyone to have a safe and
          positive experience, so here are some tips: Meet in a safe, public
          place, like a café, mall entrance, or a busy open area. <br />
          <br /> Avoid sharing sensitive personal information (e.g., phone
          number, bank details). Don’t include your full home address in your
          listing. Only share your general location or landmark. <br />
          <br /> Report anything suspicious or offensive by clicking the{" "}
          <strong>“Contact”</strong> link at the bottom of the page. Trust your
          gut. If something feels off, don’t proceed. Let’s keep this community
          kind, respectful, and safe for everyone. 🤝
        </p>
      </div>
      <Footer text="View Listings" btnClass="cta-btn-main btn" />
    </>
  );
}

export default Post;
