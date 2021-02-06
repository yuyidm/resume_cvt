(function (global) {
    let className = 't71763b8050ec'
    // 模板数据样式
    let cvtStyleLeft = Vue.extend({
        name: 'cvtStyleLeft',
        mixins: [resumeMixin],
        // language=Vue
        //language=HTML
        template: `<div class="${className} cvt_swap1">
    <div data-minimum class="data-minimum"
         v-style.mb="padding"
         v-if="m001.user_photo"
    >
        <div class="avatar">
            <img crossorigin="anonymous" :src="m001.user_photo" />
        </div>
    </div>

    <div data-minimum class="data-minimum text_fff" style="text-align: center"
         v-style.fs="fontSize"
         v-style.mb="padding"
         v-if="m009.work_position"
    > 
        {{ m009.work_position }}
    </div>

    <div data-minimum class="data-minimum" :style="{height: padding - 10 + 'px'}"></div>

    <div data-minimum class="data-minimum text_fff bottom_border_eee"
         v-style.fs="fontSize"
         v-style.mb="padding"
    >
        联系方式
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.user_phone"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            Tel
        </div>
        <div class="text_dim"
        >
            {{ m001.user_phone }}
        </div>
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.user_qq"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            QQ
        </div>
        <div class="text_dim"
        >
            {{ m001.user_qq }}
        </div>
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.user_wechat"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            WX
        </div>
        <div class="text_dim"
        >
            {{ m001.user_wechat }}
        </div>
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.user_email"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            Email
        </div>
        <div class="text_dim"
        >
            {{ m001.user_email }}
        </div>
    </div>

    <div data-minimum class="data-minimum" :style="{height: padding + 20 + 'px'}"></div>

    <div data-minimum class="data-minimum text_fff bottom_border_eee"
         v-style.fs="fontSize"
         v-style.mb="padding"
    >
        基本信息
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.english_name"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            英文名
        </div>
        <div class="text_dim"
        >
            {{ m001.english_name }}
        </div>
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.user_birth"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            出生日期
        </div>
        <div class="text_dim"
        >
            {{ m001.user_birth }}
        </div>
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.last_education"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            最高学历
        </div>
        <div class="text_dim"
        >
            {{ m001.last_education }}
        </div>
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.last_degree"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            最高学位
        </div>
        <div class="text_dim"
        >
            {{ m001.last_degree }}
        </div>
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.health_condition"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            健康情况
        </div>
        <div class="text_dim"
        >
            {{ m001.health_condition }}
        </div>
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.marriage_status"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            婚姻状况
        </div>
        <div class="text_dim"
        >
            {{ m001.marriage_status }}
        </div>
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.political_code"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            政治面貌
        </div>
        <div class="text_dim"
        >
            {{ m001.political_code }}
        </div>
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.work_status"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            当前状态
        </div>
        <div class="text_dim"
        >
            {{ m001.work_status }}
        </div>
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.professional_title.length"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            职称
        </div>
        <div class="text_dim_lines"
        >
            <template v-for="(title, idx) in m001.professional_title">{{ title }}
                <template v-if="idx !== m001.professional_title.length - 1">、</template>
            </template>
        </div>
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.user_interests"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            兴趣爱好
        </div>
        <div class="text_dim_lines"
        >
            {{ m001.user_interests }}
        </div>
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.user_native_region"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            籍贯
        </div>
        <div class="text_dim_lines"
        >
            {{ m001.user_native_region.country }}-{{ m001.user_native_region.province }}-{{
            m001.user_native_region.city }}
        </div>
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.user_birth_region"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            出生地
        </div>
        <div class="text_dim_lines"
        >
            {{ m001.user_birth_region.country }}-{{ m001.user_birth_region.province }}-{{
            m001.user_birth_region.city }}
        </div>
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.user_birth_region"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            现居住地
        </div>
        <div class="text_dim_lines"
        >
            {{ m001.user_current_region.country }}-{{ m001.user_current_region.province }}-{{
            m001.user_current_region.city }}
        </div>
    </div>

    <div data-minimum class="data-minimum"
         v-style.fs="fontSize"
         v-style.mb="padding - 10"
         v-if="m001.current_address"
    >
        <div class="text_fff"
             style="margin-bottom: 6px"
        >
            具体居住地址
        </div>
        <div class="text_dim_lines"
        >
            {{ m001.current_address }}
        </div>
    </div>

    <div data-minimum class="data-minimum" :style="{height: padding + 20 + 'px'}"></div>

    <div data-minimum class="data-minimum text_fff bottom_border_eee"
         v-style.fs="fontSize"
         v-style.mb="padding"
         v-if="m012.skills.length"
    >
        技术能力
    </div>

    <div data-minimum class="data-minimum" 
         v-style.mb="padding"
         v-for="(skill, index) in m012.skills">

        <div class="text_dim"
             v-style.fs="fontSize - 2"
             style="margin-bottom: 6px"
        >
            {{ skill.skill_name }}
        </div>

        <div class="skill" style="border-color: #BDBDBD">
            <div class="skill_length"
                 :style="{width: (skill.skill_level / skill.skill_length) * 100 + '%'}"
                 style="background-color: #BDBDBD"
            >
            </div>
        </div>
    </div>
</div>
        `,
        computed: {
            /**
             * m012的技能归类
             */
            classifiedSkills() {
                let newM012 = {};
                this.m012.skills.forEach((item, index) => {
                    if (item.type_name in newM012) {
                    } else {
                        newM012[item.type_name] = [];
                    }
                    newM012[item.type_name].push({
                        skill_level: item.skill_level,
                        skill_name: item.skill_name,
                        skill_length: item.skill_length,
                    });
                });

                let tmpList = [];
                let final = []; //其他技能

                for (let key in newM012) {
                    let value = newM012[key];

                    if (key.indexOf('其他') === -1) {
                        tmpList.push({
                            type_name: key,
                            arr: value,
                        });
                    } else {
                        final.push({
                            type_name: key,
                            arr: value,
                        });
                    }
                }

                return tmpList.concat(final);
            },
        }
    })
    let cvtStyleRight = Vue.extend({
        name: 'cvtStyleRight',
        mixins: [resumeMixin],
        // language=Vue
        //language=HTML
        template: `<div class="${className} cvt_swap2">
    <div data-minimum class="data-minimum"
         v-style.mb="padding + 10"
         v-style.bgc="color + '2e'"
    >
        gqqqqqqqqqqqqqaergargargarewdsoio;hfidfj;jewfojfoie REWRFQio
    
    </div>
    

</div>
        `
    })

    // 模板内容容器
    let swap = Vue.extend({
        mixins: [swapMixin],
        props: ['nodes1', 'nodes2'],
        watch: {
            nodes1() {
                if (this.isLoad) {
                    this.cutPage()
                }
            },
            nodes2() {
                if (this.isLoad) {
                    this.cutPage()
                }
            },
        },
        computed: {
            color() {
                if (this.cvData.config && this.cvData.config.color) {
                    return this.cvData.config.color
                }
                return '#515459'
            },
        },
        // language=Vue
        template: `
            <div>
            <div ref="swap1" class="${className} cvt_swap cvt_swap1" v-style.bgc="color"></div>
            <div ref="swap2" class="${className} cvt_swap cvt_swap2"></div>
            <div ref="swap3" class="${className} cvt_swap cvt_swap3"></div>
            </div>
        `,

        methods: {
            cutPage() {
                if (this.nodes1.length === 0 || this.nodes2.length === 0) return
                // 左侧区域
                let pages1 = [],
                    page1 = [],
                    pageDom1 = []
                this.nodes1.forEach(node => {
                    node = node.cloneNode(true)
                    this.$refs.swap1.appendChild(node)
                    if (this.$refs.swap1.offsetHeight > 1124) {
                        this.$refs.swap1.removeChild(node)
                        pages1.push(page1)
                        pageDom1.push(this.$refs.swap1.cloneNode(true))
                        this.$refs.swap1.innerHTML = ''
                        page1 = []
                        this.$refs.swap1.appendChild(node)
                    }
                    page1.push(node)
                })
                if (page1.length > 0) {
                    pages1.push(page1)
                    pageDom1.push(this.$refs.swap1.cloneNode(true))
                    this.$refs.swap1.innerHTML = ''
                }
                // 右侧区域
                let pages2 = [],
                    page2 = [],
                    pageDom2 = []
                // 合并部分
                let nodes = [],
                    pages3 = [],
                    page3 = [],
                    pageDom3 = []
                this.nodes2.forEach(node => {
                    if (pages2.length >= pages1.length) {
                        nodes.push(node)
                        return
                    }
                    node = node.cloneNode(true)
                    this.$refs.swap2.appendChild(node)
                    if (this.$refs.swap2.offsetHeight > 1124) {
                        this.$refs.swap2.removeChild(node)
                        pages2.push(page2)
                        pageDom2.push(this.$refs.swap2.cloneNode(true))
                        this.$refs.swap2.innerHTML = ''
                        page2 = []
                        if (pages2.length >= pages1.length) {
                            nodes.push(node)
                            return
                        }
                        this.$refs.swap2.appendChild(node)
                    }
                    page2.push(node)
                })
                if (page2.length > 0) {
                    pages2.push(page2)
                    pageDom2.push(this.$refs.swap2.cloneNode(true))
                    this.$refs.swap2.innerHTML = ''
                }
                if (nodes.length > 0) {
                    nodes.forEach(node => {
                        node = node.cloneNode(true)
                        this.$refs.swap3.appendChild(node)
                        if (this.$refs.swap3.offsetHeight > 1124) {
                            this.$refs.swap3.removeChild(node)
                            pages3.push(page3)
                            pageDom3.push(this.$refs.swap3.cloneNode(true))
                            this.$refs.swap3.innerHTML = ''
                            page3 = []
                            this.$refs.swap3.appendChild(node)
                        }
                        page3.push(node)
                    })
                    if (page3.length > 0) {
                        pages3.push(page3)
                        pageDom3.push(this.$refs.swap3.cloneNode(true))
                        this.$refs.swap3.innerHTML = ''
                    }
                }
                // 生成每一页简历
                let pdf = []
                let div = document.createElement('div')
                div.classList.add('pdf')
                pageDom1.forEach((node, idnex) => {
                    div.appendChild(pageDom1[idnex] || document.createElement('div'))
                    div.appendChild(pageDom2[idnex] || document.createElement('div'))
                    pdf.push(div.cloneNode(true))
                    div.innerHTML = ''
                })
                pageDom3.forEach((node, idnex) => {
                    div.appendChild(pageDom3[idnex])
                    pdf.push(div.cloneNode(true))
                    div.innerHTML = ''
                })

                this.$emit('pdf', pdf)
            }
        }
    })

    global.code = +new Date()
    global.colors = []
    global.padding = 20
    global.fontSize = 16
    global.computed = {
        name: className,
        data() {
            return {
                node1: [],
                node2: [],
                page1: [],
                page2: [],
                page3: [],
            }
        },
        mixins: [cvtMixin],
        components: {
            cvtStyleLeft,
            cvtStyleRight,
            swap
        },

        // language=Vue
        template: `
            <div class="cv__swap">

            <!-- 视图 -->
            <div ref="cvViewSwap" class="__cv__view__swap" :class="cvType" :style="viewSwapStyle"></div>

            <!-- 模板视图 -->
            <div class="__cv__template__swap">
                <cvt-style-left @minimum-node="node1 = $event" ref="cvtStyle1" :cv-data="cvData"></cvt-style-left>
                <cvt-style-right @minimum-node="node2 = $event" ref="cvtStyle2" :cv-data="cvData"></cvt-style-right>
                <swap ref="swap" @pdf="pages = $event" :nodes1="node1" :nodes2="node2" :cv-data="cvData"></swap>
            </div>

            </div>
        `
    }
})(resumeTemplate)