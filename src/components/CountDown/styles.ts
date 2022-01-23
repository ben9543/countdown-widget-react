export const config = {
    BG_COLOR: "#eb5b34",
    COLOR: "white",
    BORDER_COLOR: "#bd3611",
    NUMBER_BG_COLOR: "#e05028",
    HEIGHT: "20vh"
};

export const countdown__container_style = (
    bg_color=config.BG_COLOR, 
    color=config.COLOR,
    height=config.HEIGHT) => 
({
    backgroundColor: bg_color,
    color,
    height
});

export const countdown__number_style = (number_bg_color=config.NUMBER_BG_COLOR, border_color=config.BORDER_COLOR) => 
({
    backgroundColor: number_bg_color,
    border: `1px solid ${border_color}`
});