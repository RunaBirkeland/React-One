function MainContent() {
    return (
        <div className="main-content">
            <h1>This is a test</h1>
            <p>The goal is to see whether I can create a custom component.</p>
        </div>
    )
}

ReactDOM.render(
<div>
    <MainContent />
</div>, 
document.getElementById("root")
)