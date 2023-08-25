<template>
    <div class="H100">
        <!-- 一级 -->
        <div class="H100">
            <div class="header">导航</div>
            <div class="operation-container">
                <div class="pb16 borB">菜单</div>
                <div v-for="(item,index) in group.content"
                     :key="index"
                     @click.stop="cutPanel(1,index,item) "
                     class="borB section-item">
                    <span class="iconfont pl2 mr8"
                          style="color:#CCD0D7">&#xe60e;</span>
                    <span class="iconfont fs20"
                          style="color:#646566">&#xe8ae;</span>
                    <span class="pl16 fs16"
                          style="color:#15161b">{{ item.title?item.title:item.type==2?'菜单导航':'自定义菜单' }}</span>
                </div>
                <div class="borB">
                    <el-popover placement="bottom-end"
                                width="100"
                                trigger="manual"
                                v-model="visible">

                        <div class="block-list">
                            <div class="select-block-item"
                                 :class="{'select-block-item-disabed':itemDisabed}"
                                 @click.stop="addMenu(1,1)">菜单导航({{itemDisabed?1:0}}/1)</div>
                            <div class="select-block-item"
                                 @click.stop="addMenu(1,2)">自定义菜单</div>
                        </div>
                        <div class="add-block-item"
                             slot="reference"
                             @click.stop="visible = !visible">
                            <div><span class="plus iconfont">&#xeaf3;</span>
                                <span>添加内容</span>
                            </div>
                            <div>
                                <i style="color:#B9BFC9"
                                   :class="!visible?'el-icon-caret-bottom':'el-icon-caret-top'"></i>
                            </div>
                        </div>
                    </el-popover>

                </div>

                <div>
                    <div class="mt5 mb10 mt10">导航类型</div>
                    <el-select v-model="group.navType"
                               size="small">
                        <el-option v-for="item in navTypArr"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value"></el-option>
                    </el-select>
                </div>
                <div class="mt10">
                    <div class="logoTitle">logo设置</div>
                    <div class="pt14 mb8">logo图片</div>
                    <div class="textCenter">
                        <div class="collection-box"
                             v-if="!group.logoImage">
                            <el-button type="primary"
                                       @click.stop="cutImage('logo')">
                                选择图片</el-button>
                        </div>
                        <div v-else
                             class="image-picker-container">
                            <div class="img-selected-box">
                                <el-image :src="group.logoImage"
                                          class="img-by-select "></el-image>
                            </div>
                            <div class="edit-button">
                                <span class="edit-item"
                                      @click.stop="cutImage('logo')">更改</span>
                                <span class="edit-item"
                                      @click.stop="deleteOperateItem(5)">删除</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt24">
                        <div class="mb10">logo对齐方式</div>
                        <el-select v-model="group.aligningType">
                            <el-option :value="1"
                                       label="左侧"></el-option>
                            <el-option :value="2"
                                       label="居中"></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="mt10">
                    <div class="navSet">导航栏设置</div>
                    <div class="mt10">导航栏高度</div>
                    <div class="ranger-container">
                        <el-slider v-model="group.navHeight"
                                   :max="160"
                                   :min="60"
                                   class="W70 mr15"></el-slider>
                        <el-input v-model="group.navHeight"
                                  size="mini"
                                  class="w90">
                            <template slot="append">px</template>
                        </el-input>
                    </div>

                    <div class="mt10">
                        <div class="mb10">导航栏宽度 </div>
                        <el-select v-model="group.width">
                            <el-option v-for="(item,index) in widthArr"
                                       :key="index"
                                       :label="item.label"
                                       :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <div class="mt10">
                        <div>主菜单对齐方式</div>
                        <el-select v-model="group.mainMenu"
                                   class="mt10">
                            <el-option v-for="item in aligningArr"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value"> </el-option>
                        </el-select>
                    </div>
                    <div class="mt10">
                        <div>子菜单对齐方式</div>
                        <el-select v-model="group.submenu">
                            <el-option v-for="item in aligningArr"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value"
                                       v-show="item.value!=3"></el-option>
                        </el-select>
                    </div>
                    <div class="mt10">
                        <div>子菜单打开方式</div>
                        <el-select v-model="group.openMode">
                            <el-option label="下拉展开"
                                       :value="1"></el-option>
                            <el-option label="点击进入"
                                       :value="2"></el-option>
                        </el-select>
                    </div>
                    <div class="mt10">
                        <div>H5展开图标样式</div>
                        <el-select v-model="group.expansionStyle">
                            <el-option label="样式1"
                                       :value="1"></el-option>
                            <el-option label="样式2"
                                       :value="2"></el-option>
                        </el-select>
                    </div>
                    <div class="mt10">
                        <div class="lh36">主菜单间距</div>
                        <div class="ranger-container">
                            <el-slider v-model="group.mainMenuGap"
                                       :max="80"
                                       :min="16"
                                       class="W70 mr15"></el-slider>
                            <el-input v-model="group.mainMenuGap"
                                      size="mini"
                                      class="w90">
                                <template slot="append">px</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="mt10">
                        <div class="lh36">菜单组间距</div>
                        <div class="ranger-container">
                            <el-slider v-model="group.menuGroups"
                                       :max="600"
                                       :min="100"
                                       class="W70 mr15"></el-slider>
                            <el-input v-model="group.menuGroups"
                                      size="mini"
                                      class="w90">
                                <template slot="append">px</template>
                            </el-input>
                        </div>
                    </div>

                    <el-checkbox-group v-model="group.exhibit">
                        <el-checkbox :label="1"
                                     class=" mb10">子菜单自适应内容宽度</el-checkbox>
                        <el-checkbox :label="2"
                                     class="flex">上滑消失下滑出现</el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="mt20">
                    <div class="navSet">导航颜色</div>
                    <div class="mt20 ">
                        <div class="left">默认背景颜色</div>
                        <div class="end">
                            <el-color-picker v-model="group.bgColor"
                                             size="mini"></el-color-picker>
                        </div>
                    </div>
                    <div class="mt20 ">
                        <div class="left">默认文字和图标颜色
                        </div>
                        <div class="end">
                            <el-color-picker v-model="group.contentColor"
                                             size="mini"></el-color-picker>
                        </div>
                    </div>
                    <div class="mt10">
                        <el-checkbox v-model="group.lucencyBg">启用透明背景</el-checkbox>
                        <div class="hint">启用后,导航将叠放在主页内容上方</div>
                    </div>

                    <div class="mt20 "
                         v-for="item in colorSet"
                         :key="item.value">
                        <div class="left">{{ item.label }}</div>
                        <div class="end">
                            <el-color-picker v-model="group[item.value]"
                                             size="mini"></el-color-picker>
                        </div>
                    </div>
                    <div class="mt20"
                         v-for="item in FontSizeArr"
                         :key="item.value">
                        <div>{{ item.label }}</div>
                        <div class="ranger-container">
                            <el-slider v-model="group[item.value]"
                                       :max="12"
                                       :min="8"
                                       class="W70 mr15"></el-slider>
                            <el-input v-model="group[item.value]"
                                      size="mini"
                                      class="w90">
                                <template slot="prepend">H</template>
                            </el-input>
                        </div>
                    </div>

                    <div class="mt10">
                        <el-checkbox-group v-model="group.revealIcon">
                            <el-checkbox v-for="item in revealIconArr"
                                         class="mt20"
                                         :label="item.value"
                                         :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>

                </div>
            </div>
        </div>
        <!-- 菜单 -->
        <div class="H100  content_edit_panel"
             :style="{width:zIndexPanel > 1?'100%':'0px','z-index':2000}">
            <div class="header flex pl20">
                <i @click.stop="zIndexPanel--"
                   class="iconfont fs20">&#xe61e;</i>
            </div>
            <div class="operation-container"
                 v-if="group.content[contentIndex] && group.content[contentIndex].children">
                <div class="pb16 borB">内容</div>
                <div v-for="(item,index) in group.content[contentIndex].children"
                     :key="index"
                     @click.stop="cutPanel(2,index,item)"
                     class="borB section-item">
                    <span class="iconfont pl2 mr8"
                          style="color:#CCD0D7">&#xe60e;</span>
                    <span class="iconfont fs20"
                          v-if="!item.img"
                          style="color:#646566"> {{item.type==1?'&#xe8ba;':'&#xe8e1;'}} </span>
                    <el-image v-else
                              :src="item.img"
                              class="w20 h20"></el-image>
                    <span class="pl16 fs16"
                          style="color:#15161b">{{ item.title?item.title:item.type==1?'图片':'菜单组'}}</span>
                </div>
                <div class="borB">
                    <el-popover placement="bottom-end"
                                width="100"
                                trigger="manual"
                                v-model="visible1">

                        <div class="block-list">
                            <div class="select-block-item"
                                 @click.stop="addMenu(2,2)">菜单组</div>
                            <div class="select-block-item"
                                 @click.stop="addMenu(2,1)">图片</div>
                        </div>
                        <div class="add-block-item"
                             slot="reference"
                             @click.stop="visible1 = !visible1">
                            <div><span class="plus iconfont">&#xeaf3;</span>
                                <span>添加内容</span>
                            </div>
                            <div>
                                <i style="color:#B9BFC9"
                                   :class="!visible1?'el-icon-caret-bottom':'el-icon-caret-top'"></i>
                            </div>
                        </div>
                    </el-popover>

                </div>
                <div>
                    <div class="navSet">设置</div>
                    <div class="mt20">
                        <div class="mb10">菜单标题</div>
                        <el-input v-model="group.content[contentIndex].title"></el-input>
                    </div>
                    <div class="mt20">
                        <div>链接</div>
                        <el-select class="mt10"
                                   v-model="group.content[contentIndex].link">
                            <el-option v-for="item in linkArr"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value"></el-option>
                        </el-select>
                        <div class="textColor">可选</div>
                    </div>

                    <div class="mt20 mb10">
                        <div class="mb10">打开方式</div>
                        <el-select v-model="group.content[contentIndex].openMode">
                            <el-option v-for="item in openModeArr"
                                       :key="item.value"
                                       :value="item.value"
                                       :label="item.label"></el-option>
                        </el-select>
                    </div>
                    <div>
                        <!--  -->
                        <el-checkbox v-model="group.content[contentIndex].showTag">显示标签</el-checkbox>
                        <div v-if="group.content[contentIndex].showTag">
                            <div class="mt20">
                                <div class="mb10">标签文字</div>
                                <el-input v-model="group.content[contentIndex].tagText"></el-input>
                            </div>

                            <div class="mt10">
                                <div class="left">标签背景颜色</div>
                                <div class="end">
                                    <el-color-picker v-model="group.content[contentIndex].tagBgColor"
                                                     size="mini"></el-color-picker>
                                </div>
                            </div>
                            <div class="mt10">
                                <div class="left">标签文字</div>
                                <div class="end">
                                    <el-color-picker v-model="group.content[contentIndex].tagColor"
                                                     size="mini"></el-color-picker>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="themeColor mt20 hand"
                         @click.stop="deleteOperateItem(1)">
                        <i class="iconfont">&#xe74b;</i>
                        删除内容
                    </div>
                </div>

            </div>

        </div>
        <!-- 菜单组-->
        <div class="H100 content_edit_panel"
             :style="{width:zIndexPanel > 2?'100%':'0px','z-index':2001}">
            <div class="header flex pl20">
                <i @click.stop="zIndexPanel--"
                   class="iconfont fs20">&#xe61e;</i>
            </div>
            <div class="operation-container"
                 v-if="group.content[contentIndex] &&group.content[contentIndex].children && group.content[contentIndex].children[stairIndex] &&group.content[contentIndex].children[stairIndex].children">
                <div class="pb16 borB">内容</div>
                <div v-for="(item,index) in group.content[contentIndex].children[stairIndex].children"
                     :key="index"
                     @click.stop="cutPanel(3,index)"
                     class="borB section-item">
                    <span class="iconfont pl2 mr8"
                          style="color:#CCD0D7">&#xe60e;</span>
                    <span class="iconfont fs20"
                          style="color:#646566"> &#xe8e1;</span>
                    <span class="pl16 fs16"
                          style="color:#15161b">{{ item.title?item.title:"菜单标题" }}</span>
                </div>

                <div class="borB">
                    <div class="add-block-item"
                         @click.stop="addMenu(3)">
                        <div><span class="plus iconfont">&#xeaf3;</span>
                            <span>添加内容</span>
                        </div>
                    </div>
                </div>
                <!-- <div class="mt20">
                    <div class="mt1o">菜单标题</div>
                    <el-input v-model="group.content[contentIndex].children[stairIndex].title"></el-input>
                </div>
                <div class="mt20">
                    <div class="mb10">链接</div>
                    <el-select placeholder="搜索或粘贴链接"
                               filterable
                               clearable
                               v-model="group.content[contentIndex].children[stairIndex].link">

                        <el-option v-for="item in linkArr"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value"></el-option>
                    </el-select>
                    <div class="textColor">可选</div>
                </div>
                <div class="mt20">
                    <div class="mb10">打开方式</div>

                    <el-select v-model="group.content[contentIndex].children[stairIndex].openMode">
                        <el-option v-for="item in openModeArr"
                                   :key="item.value"
                                   :value="item.value"
                                   :label="item.label"></el-option>
                    </el-select>

                    <el-checkbox v-model="group.content[contentIndex].children[stairIndex].showTag">显示标签</el-checkbox>
                </div> -->

                <div class="themeColor mt20 hand"
                     @click.stop="deleteOperateItem(2)">
                    <i class="iconfont">&#xe74b;</i>
                    删除内容
                </div>

            </div>
        </div>
        <!-- 菜单信息编辑 -->
        <div class="H100 content_edit_panel"
             :style="{width:zIndexPanel > 3?'100%':'0px','z-index':2002}">
            <div class="header flex pl20">
                <i @click.stop="zIndexPanel--"
                   class="iconfont fs20">&#xe61e;</i>
            </div>
            <div class="operation-container"
                 v-if="group.content[contentIndex] && group.content[contentIndex].children && group.content[contentIndex].children[stairIndex] && group.content[contentIndex].children[stairIndex].children &&  group.content[contentIndex].children[stairIndex].children.length">
                <div class="mt10">
                    <div class="mb10">菜单标题</div>
                    <el-input v-model="group.content[contentIndex].children[stairIndex].children[secondIndex].title"></el-input>
                </div>
                <div class="mt40">
                    <div class="mb10">链接</div>
                    <el-select v-model="group.content[contentIndex].children[stairIndex].children[secondIndex].link">
                        <el-option v-for="item in linkArr"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value"></el-option></el-select>
                    <div class="textColor">可选</div>
                </div>

                <div class="mt20">
                    <div class="mb10">打卡方式</div>
                    <el-select v-model="group.content[contentIndex].children[stairIndex].children[secondIndex].alignment">
                        <el-option v-for="item in openModeArr"
                                   :key="item.value"
                                   :value="item.value"
                                   :label="item.label"></el-option>
                    </el-select>
                    <el-checkbox class="mt10"
                                 v-model="group.content[contentIndex].children[stairIndex].children[secondIndex].showTag">显示标签</el-checkbox>

                    <div v-if="group.content[contentIndex].children[stairIndex].children[secondIndex].showTag">
                        <div class="mt20">
                            <div class="mb10">标签文字</div>
                            <el-input v-model="group.content[contentIndex].children[stairIndex].children[secondIndex].tagText"></el-input>
                        </div>

                        <div class="mt10">
                            <div class="left">标签背景颜色</div>
                            <div class="end">
                                <el-color-picker v-model="group.content[contentIndex].children[stairIndex].children[secondIndex].tagBgColor"
                                                 size="mini"></el-color-picker>
                            </div>
                        </div>
                        <div class="mt10">
                            <div class="left">标签文字</div>
                            <div class="end">
                                <el-color-picker v-model="group.content[contentIndex].children[stairIndex].children[secondIndex].tagColor"
                                                 size="mini"></el-color-picker>
                            </div>
                        </div>
                    </div>

                    <div class="themeColor mt20 hand"
                         @click.stop="deleteOperateItem(3)">
                        <i class="iconfont">&#xe74b;</i>
                        删除内容
                    </div>
                </div>
            </div>
        </div>
        <!-- 图片 -->
        <div class="H100 content_edit_panel"
             :style="{width:zIndexPanel > 4?'100%':'0px','z-index':2003}">
            <div class="header flex pl20">
                <i @click.stop="zIndexPanel=2"
                   class="iconfont fs20">&#xe61e;</i>

            </div>
            <div class="operation-container"
                 v-if="group.content[contentIndex] && group.content[contentIndex].children && group.content[contentIndex].children[stairIndex]">
                <div>图片</div>
                <div class="textCenter">
                    <div class="collection-box"
                         v-if="!group.content[contentIndex].children[stairIndex].img">
                        <el-button type="primary"
                                   @click.stop="cutImage('content')">选择图片</el-button>
                    </div>
                    <div class="image-picker-container"
                         v-else>
                        <div class="img-selected-box">
                            <el-image :src="group.content[contentIndex].children[stairIndex].img"
                                      class="img-by-select "></el-image>
                        </div>
                        <div class="edit-button">
                            <span class="edit-item"
                                  @click.stop="cutImage('content')">更改</span>
                            <span class="edit-item"
                                  @click.stop="deleteOperateItem(6)">删除</span>
                        </div>
                    </div>
                </div>

                <div class="mt20">
                    <div class="mb10">链接</div>
                    <el-select placeholder="搜索或粘贴链接"
                               filterable
                               clearable
                               v-model="group.content[contentIndex].children[stairIndex].link">

                        <el-option v-for="item in linkArr"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value"></el-option>>
                    </el-select>
                    <div class="textColor">可选</div>
                </div>
                <div class="mt20">
                    <div class="mb10">文本</div>
                    <quill-editor class="ql-editors"
                                  ref="myQuillEditor"
                                  v-model="group.content[contentIndex].children[stairIndex].text"
                                  :options="editorOption">
                    </quill-editor>
                </div>
                <div class="mt10">
                    <div class="ranger-container">
                        <el-slider v-model="group.content[contentIndex].children[stairIndex].textFontSize"
                                   :max="12"
                                   :min="8"
                                   class="W70 mr15"></el-slider>
                        <el-input v-model="group.content[contentIndex].children[stairIndex].textFontSize"
                                  size="mini"
                                  class="w90">
                            <template slot="prepend">H</template>
                        </el-input>
                    </div>
                </div>
                <div class="mt20">
                    <div class="mb10">对齐方式</div>
                    <el-select v-model="group.content[contentIndex].children[stairIndex].alignment">
                        <el-option v-for="item in aligningArr"
                                   :key="item.value"
                                   :value="item.value"
                                   :label="item.label"
                                   v-show="item.value != 3"></el-option>
                    </el-select>
                </div>
                <el-checkbox class="mt20 mb20"
                             v-model="group.content[contentIndex].children[stairIndex].trimStrip">展示装饰线条</el-checkbox>
                <div class="themeColor  hand"
                     @click.stop="deleteOperateItem(7)">
                    <i class="iconfont">&#xe74b;</i>
                    删除内容
                </div>
            </div>
        </div>
        <!--菜单导航  -->
        <div class="H100 content_edit_panel"
             :style="{width:zIndexPanel > 5?'100%':'0px','z-index':2004}">
            <div class="header flex pl20">
                <i @click.stop="zIndexPanel=1"
                   class="iconfont fs20">&#xe61e;</i>
            </div>
            <div class="operation-container"
                 v-if="group.content[contentIndex]">
                <div class="mt10">
                    <div class="mb10">菜单导航</div>
                    <div class="collection"
                         v-if="!group.content[contentIndex].menuId">
                        <el-button type="primary"
                                   @click.stop="zIndexPanel++">选择菜单</el-button>
                    </div>
                    <div v-else
                         class="collection-preview-container">
                        <div class="collection-link-name">{{ group.content[contentIndex].menuTitle }}</div>
                        <div class="collection-link-operate">
                            <span class="collection-link-operate-item">更改</span>
                            <span class="collection-link-operate-item"
                                  @click.stop="zIndexPanel++">编辑</span>
                            <span class="collection-link-operate-item"
                                  @click.stop="deleteOperateItem(-1)">删除</span>
                        </div>
                    </div>
                </div>
                <div class="mt20">
                    <div class="mb10">打开方式</div>
                    <el-select v-model="group.content[contentIndex].openMode">
                        <el-option v-for="item in openModeArr"
                                   :key="item.value"
                                   :value="item.value"
                                   :label="item.label"></el-option>
                    </el-select>
                </div>
                <div class="themeColor mt20 hand"
                     @click.stop="deleteOperateItem(4)">
                    <i class="iconfont">&#xe74b;</i>
                    删除内容
                </div>

            </div>
        </div>
        <!-- 菜单导航信息 -->
        <div class="menu_content_edit_panel"
             :style="{height:zIndexPanel > 6?'100%':'0px','z-index':2005}">
            <div class="header end pr30 ">
                <i class="iconfont fs25 fw500"
                   @click.stop="zIndexPanel--">&#xe85c;</i>
            </div>
            <div class="operation-container p0"
                 v-if="group.content[contentIndex]">
                <div class="add-block-item">
                    <div>
                        <i class="plus iconfont">&#xeaf3;</i>
                        <span class="text_color ml30">添加内容</span>
                    </div>
                </div>

                <div v-for="item in menuArr"
                     :key="item.index"
                     class="list-item">
                    <span class="item-name">{{ item.label }}</span>
                    <el-radio v-model="group.content[contentIndex].menuId"
                              class="topCenter"
                              :label="item.value"
                              @input="group.content[contentIndex].menuTitle = item.label"></el-radio>
                </div>

                <div class="picker-bottom W100">
                    <div class="">
                        <div class="select-type"
                             :style="{display: group.content[contentIndex].menuId && zIndexPanel >6?'block':' none '}">
                            <div class="current-select-text">当前选择</div>
                            <div class="current-select">
                                <!-- <el-image class="item-logo"></el-image> -->
                                <span class="item-name">{{ group.content[contentIndex].menuTitle }}</span>
                            </div>
                        </div>
                        <div class="footer-bottom"
                             v-if="zIndexPanel > 6">
                            <el-button @click.stop="zIndexPanel--">取消</el-button>
                            <el-button @click.stop="zIndexPanel--"
                                       type="primary">选择</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ImageList @confirm="getImage"
                   @close="isImageList=false"
                   v-if="isImageList"></ImageList>
    </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
import ImageList from "../ImageList.vue";
export default {
  components: {
    "quill-editor": quillEditor,
    ImageList,
  },
  props: {
    assembly: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    group: {
      handler(newVal) {
        this.$emit("call", newVal);
      },
      deep: true,
    },
  },
  data() {
    return {
      isImageList: false,
      zIndexPanel: 1, //层级动画
      contentIndex: 0, //内容Index
      stairIndex: 0, //内容下第一级index
      secondIndex: 0, //内容下第二级index
      itemDisabed: false, //是否添加菜单导航
      group: {
        content: [
          {
            title: "NEW",
            type: 1, //自定义菜单
            link: "",
            openMode: 1,
            showTag: false,
            tagText: "New",
            tagBgColor: "#FF6500",
            tagColor: "#ffffff",
            children: [
              {
                title: "", //标题
                type: 1, //图标
                img: "https://img01.yzcdn.cn/upload_files/2021/08/07/FkIL32Xjm2GDYIYW-w0SS0zPfpuH.png",
                link: "", //跳转链接
                text: "", //文本
                textFontSize: 12, //字体大小
                alignment: 1, //对齐方式
                trimStrip: true, //装饰条
              },
              {
                type: 2, //菜单
                title: "",
                alignment: 1, //对齐方式
                trimStrip: true, //装饰条
                children: [
                  {
                    title: "",
                    link: "",
                    alignment: 1,
                    showTag: false,
                    tagText: "New",
                    tagBgColor: "#FF6500",
                    tagColor: "#ffffff",
                  },
                ],
              },
            ],
          },
        ],
        navType: 1, //导航类型:横向导航,侧边导航
        aligningType: 1, //对齐方式:左侧,居中
        logoImage:
          "https://img01.yzcdn.cn/upload_files/2021/08/07/Fm1PAsz1rZpFaSdAaOEvJ5XrGAfd.png",
        navHeight: 80,
        width: "full", //导航栏宽度
        mainMenu: 1, //主菜单对齐方式
        submenu: 1, //子菜单对齐方式
        openMode: 1, //子菜单打开方式
        expansionStyle: 1, //H5展开图标样式
        mainMenuGap: 16, //主菜单宽度
        menuGroups: 200, //菜单组宽度
        exhibit: [], //子菜单自适应内容宽度,上滑消失下滑出现
        bgColor: "", //背景色
        contentColor: "", //文字与图标颜色
        lucencyBg: false, //透明背景色
        slideBg: "", //滑动前背景颜色
        slideContentColor: "", //滑动前文字颜色
        submenuBg: "#ffffff", //子菜单背景
        submenuContentColor: "", //子菜单文字
        stairFontSize: 11, //一级字号
        secondFontSize: 11, //二级字号
        threeFontSize: 11, //三级
        revealIcon: [], //显示搜索图标
      },
      menuArr: [
        { label: "搜索", value: 1 },
        { label: "主菜单", value: 2 },
      ],
      // 打开方式
      openModeArr: [
        { label: "当前页打开", value: 1 },
        { label: "新窗口打开", value: 2 },
      ],
      colorSet: [
        { label: "滑动前背景", value: "slideBg" },
        { label: "滑动前文字和图标", value: "slideContentColor" },
        { label: "子菜单背景", value: "submenuBg" },
        { label: "子菜单文字", value: "submenuContentColor" },
      ],
      FontSizeArr: [
        { label: "1级菜单字号", value: "stairFontSize" },
        { label: "2级菜单字号", value: "secondFontSize" },
        { label: "3级菜单字号", value: "threeFontSize" },
      ],
      revealIconArr: [
        { label: "显示搜索图标", value: 1 },
        { label: "显示个人中心图标", value: 2 },
        { label: "显示心愿单图标", value: 3 },
        { label: "显示购物车图标", value: 4 },
      ],

      navTypArr: [
        { label: "横向导航", value: 1 },
        { label: "侧边导航", value: 2 },
      ],

      widthArr: [
        { label: "全屏", value: "full" },
        { label: "960px", value: "960px" },
        { label: "1280px", value: "1280px" },
      ],
      aligningArr: [
        { label: "左侧", value: 1 },
        { label: "居中", value: 2 },
        { label: "右侧", value: 3 },
      ],
      linkArr: [{ label: "搜索", value: "https://www.baidu.com" }],
      visible: false,
      visible1: false,
      imageType: "",
      // 富文本
      editorOption: {
        debug: "info",
        placeholder: "",
        readOnly: false,
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic"], // toggled buttons
            ["link"],
          ],
        },
      },
    };
  },
  mounted() {
    console.info("父组件值", this.assembly);
    // this.group = JSON.parse(JSON.stringify(this.assembly));
  },
  methods: {
    cutPanel(level, index, item) {
      console.info(item);
      this.zIndexPanel += 1;
      if (level == 1) {
        this.contentIndex = index;
        if (item.type == 2) this.zIndexPanel = 6;
      } else if (level == 2) {
        this.stairIndex = index;
        if (item.type == 1) this.zIndexPanel = 5;
      } else if (level == 3) {
        this.secondIndex = index;
      }
    },
    addMenu(type, index) {
      if (type == 1) {
        if (this.itemDisabed && index == 1) return false;
        let info = {
          title: "",
          type: 2,
          link: "",
          openMode: 1,
          showTag: false,
        };
        if (index == 1) {
          info.menuId = "";
          this.itemDisabed = true;
          this.group.content.push(info);
        } else {
          info.type = 1;
          info.children = [];
          this.group.content.push(info);
        }
        this.visible = false;
      } else if (type == 2) {
        console.info(type, index);
        if (index == 1) {
          this.group.content[this.contentIndex].children.push({
            antSize: 12, //字体大小
            alignment: 1, //对齐方式
            trimStrip: true, //装饰条
            type: 1,
          });
        } else {
          this.group.content[this.contentIndex].children.push({
            title: "",
            alignment: 1, //对齐方式
            trimStrip: true, //装饰条
            type: 2, //菜单
            children: [],
          });
        }
        this.visible1 = false;
      } else if (type == 3) {
        this.group.content[this.contentIndex].children[
          this.stairIndex
        ].children.push({
          title: "",
          link: "",
          alignment: 1,
          showTag: false,
          tagText: "New",
          tagBgColor: "#FF6500",
          tagColor: "#ffffff",
        });
      }
    },
    deleteOperateItem(type) {
      if (type == -1) {
        this.group.content[this.contentIndex].menuId = "";
        this.group.content[this.contentIndex].menuTitle = "";
      } else if ([1, 4].indexOf(type) != -1) {
        this.zIndexPanel = type == 1 ? this.zIndexPanel - 1 : 1;
        this.group.content.splice(this.contentIndex, 1);
        if (type == 4) this.itemDisabed = false;
      } else if ([2, 7].indexOf(type) != -1) {
        this.zIndexPanel -= 1;
        this.group.content[this.contentIndex].children.splice(
          this.stairIndex,
          1
        );
        if (type == 7) this.zIndexPanel = 2;
      } else if (type == 3) {
        this.zIndexPanel -= 1;
        this.group.content[this.contentIndex].children[
          this.stairIndex
        ].children.splice(this.secondIndex, 1);
      } else if (type == 5) {
        this.group.logoImage = "";
      } else if (type == 6) {
        this.group.content[this.contentIndex].children[this.stairIndex].img =
          "";
      }
    },
    cutImage(type) {
      this.imageType = type;
      this.isImageList = true;
    },
    getImage(item) {
      console.info("打印获取到的图片-=-=", item);
      if (this.imageType == "logo") this.group.logoImage = item.link;
      else if (this.imageType == "content")
        this.group.content[this.contentIndex].children[this.stairIndex].img =
          item.link;

      this.isImageList = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.content_edit_panel {
  position: absolute;
  width: 0px;
  right: 0;
  top: 0;
  transition: 0.3s;
}
.menu_content_edit_panel {
  position: absolute;
  width: 100%;
  right: 0;
  bottom: 0;
  height: 0px;
  transition: 0.3s;
  background: #fff;
  .header {
    line-height: 64px;
    background: #fff;
    margin-bottom: 0 !important;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #15161b;
    border-bottom: 1px solid #f2f3f5;
  }
}
.header {
  background: #fff;
  font-size: 16px;
  color: #15161b;
  text-align: center;
  line-height: 64px;
  margin-bottom: 8px;
}
.operation-container {
  background: rgb(255, 255, 255);
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden auto;
  height: calc(100% - 72px);
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.4);
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    -webkit-border-radius: 2px;
    border-radius: 2px;
  }
  .picker-bottom {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    .select-type {
      background: #fff;
      box-shadow: 0 -4px 8px 0 rgba(185, 191, 201, 0.4), 0 -1px 0 0 #ebedf0;
      padding: 24px;
      .current-select-text {
        font-size: 14px;
        font-weight: 400;
        color: #b9bfc9;
        line-height: 14px;
      }
      .current-select {
        font-size: 24px;
        font-weight: 600;
        color: #15161b;
        margin: 16px 0 24px;
        .item-logo {
          max-width: 40px;
          max-height: 40px;
          vertical-align: middle;
          margin-right: 8px;
          fill: #b9bfc9;
        }
        .item-name {
          font-size: 16px;
          font-weight: 400;
          color: #15161b;
          line-height: 16px;
        }
      }
    }
    .footer-bottom {
      text-align: right;
      -webkit-box-shadow: 0 -1px 0 0 #f2f3f5;
      box-shadow: 0 -1px 0 0 #f2f3f5;
      padding: 12px 24px;
      background: #fff;
    }
  }
  .list-item {
    min-height: 48px;
    line-height: 48px !important;
    padding: 0 24px;
    background: #fff;
    font-size: 16px !important;
    color: #15161b;
    border-bottom: 1px solid #f2f3f5;
    border-left: 3px solid transparent;
    display: flex;
    word-break: break-all;
    .item-name {
      font-size: 16px;
      font-weight: 400;
      color: #15161b;
      line-height: 16px;
      -webkit-box-flex: 1;
      flex: 1;
      padding: 16px 0;
    }
    ::v-deep .el-radio__label {
      display: none;
    }
  }
  .add-block-item {
    line-height: 64px;
    background: #fff;
    font-size: 16px;
    font-weight: 400;
    color: #476cf0;
    position: relative;
    -webkit-box-shadow: 0 1px 0 0 #f2f3f5;
    box-shadow: 0 1px 0 0 #f2f3f5;
    display: flex;
    justify-content: space-between;
    text-align: left;
    cursor: pointer;

    .plus {
      font-weight: 600;
      font-size: 16px;
      background: rgba(71, 108, 240, 0.1);
      padding: 4px 5px;
      margin: 0 18px 0 28px;
    }
  }
  .section-item {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 64px;
    line-height: 64px;
    cursor: pointer;
  }
  .logoTitle {
    line-height: 30px;
    background: #fff;
    text-align: left;
    font-weight: 600;
    color: #15161b;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .image-picker-container {
    height: 230px;
    margin-top: 8px;
    background: #b9bfc91f;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    border-radius: 2px 2px 0 0;
    border: 1px solid #ebedf0;
    cursor: pointer;
    .img-selected-box {
      width: 100%;
      height: calc(100% - 40px);
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      display: flex;
      .img-by-select {
        max-height: 100%;
        max-width: 100%;
        vertical-align: middle;
      }
    }

    .edit-button {
      background: #fff;
      height: 40px;
      display: flex;
      line-height: 40px;
      border-radius: 2px;
      border-top: 1px solid #ebedf0;
      width: 100%;
      font-size: 16px;
      cursor: pointer;
      .edit-item:first-child {
        border-right: 1px solid #ebedf0;
      }
      .edit-item {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        border-bottom: 1px solid #ebedf0;
      }
    }
  }

  .navSet {
    line-height: 30px;
    background: #fff;
    text-align: left;
    font-weight: 600;
    color: #15161b;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .ranger-container {
    display: flex;
    line-height: 46px;
    -webkit-box-align: center;
    align-items: center;
  }
  .hint {
    color: #969799;
    font-size: 14px;
    line-height: 20px;
  }
  .collection {
    height: 136px;
    background: rgba(185, 191, 201, 0.12);
    border-radius: 2px 2px 0 0;
    border: 1px solid #ebedf0;
    text-align: center;
    line-height: 136px;
  }
  .collection-box {
    height: 230px;
    line-height: 230px;
    background: rgba(185, 191, 201, 0.12);
    border-radius: 2px 2px 0 0;
    border: 1px solid #ebedf0;
    text-align: center;
  }
  .collection-preview-container {
    border: 1px solid #ebedf0;
    .collection-link-name {
      padding: 24px 16px;
      background: #f7f7f9;
      border-radius: 2px 2px 0 0;
      border-bottom: 1px solid #ebedf0;
      width: calc(100% - 32px);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .collection-link-operate {
      display: flex;
      box-sizing: border-box;
      line-height: 40px;
      .collection-link-operate-item {
        font-size: 16px;
        font-weight: 400;
        color: #15161b;
        text-align: center;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        cursor: pointer;
      }
    }
  }
}

.block-list {
  .select-block-item {
    cursor: pointer;
    padding: 10px 20px;
  }
  .select-block-item-disabed {
    cursor: not-allowed;
    color: #c8c9cc;
  }
  .select-block-item:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}
.ql-editors {
  height: 170px;
}
.ql-toolbar.ql-snow {
  background: #f7f8fa !important;
  border: 1px solid #ebedf0 !important;
}
.ql-container.ql-snow {
  border: 1px solid #ebedf0 !important;
  height: 120px;
}
</style>