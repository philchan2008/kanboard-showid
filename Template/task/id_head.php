<div id="id_sidebar_title"  class="HideID">
    <div class="sidebar-title">
        <h2><?=t('Task')?><span style="color: gray; ">
        🆔<?=$task['id']?>
        </span></h2>
    </div>
</div>

<div id="id_task_title"  class="HideID">
    <div id="id_task_head"  class="ShowID">
        <div style="color: gray; ">
        <font color="pink">K</font><font color="lightgray">B</font>🆔<?=$task['id']?>: <font color="black"><?=$task['title']?></font>
        </div>
    </div>
</div>

<div id="id_sidebar_head"  class="HideID">
    <div style="color: gray; ">
    <font color="pink">K</font><font color="lightgray">B</font>🆔<?=$task['id']?>
    </div>
</div>

<div id="id_comment_title"  class="HideID">
<span style="color: gray; "><font color="pink">K</font><font color="lightgray">B</font>🆔<?=$task['id']?>💬$comment_id</span>
</div>

<span id="id_subtask_title"  class="HideID">
<span class="subtask_id"><font color="pink">K</font><font color="lightgray">B</font>🆔<?=$task['id']?>🔖$subtask_id</i></span>
</span>