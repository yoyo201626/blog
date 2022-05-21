package appctl

import (
	"blog/model"

	"github.com/labstack/echo/v4"
	"github.com/zxysilent/utils"
)

// PostPage doc
// @Tags post-文章
// @Summary 获取所有文章的path和id
// @Success 200 {object} model.Reply{data=[]model.Post} "返回数据"
// @Router /api/post/postall [get]
func PathAndIdAll(ctx echo.Context) error {
	mods, err := model.PostAll2()
	if err != nil {
		return ctx.JSON(utils.ErrOpt("未查询到pathAll", err.Error()))
	}
	return ctx.JSON(utils.Succ("succ", mods))
}
